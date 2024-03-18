<template>
  <MainLayout>
    <SpinnerLoader v-if="isLoading" />
    <ArtistPopup
      v-else
      :show="show"
      @close="toggleShow"
      @add-artist="addArtist"
      :artists="allArtists"
      :gallery-artists="artists"
    />
    <div class="header">
      <h4>ARTISTS IN YOUR ACCOUNT</h4>
    </div>
    <v-divider></v-divider>
    <InsideSearch
      button="Add Artist"
      @search="filterArtists"
      @popup="toggleShow"
    />
    <v-divider></v-divider>
    <div class="info-container">
      <p class="info">
        Move your Artists around by dragging and dropping them into your
        preferred order!
      </p>
      <div style="cursor: pointer" @click="saveOrder">
        Save Order
        <SpinnerLoader v-if="isSaving" :color="'white'" class="save-loader" />
      </div>
    </div>
    <v-divider></v-divider>
    <Container orientation="vertical" @drop="onDrop">
      <Draggable v-for="artist in filteredArtists" :key="artist.id">
        <ArtistCard
          :artist="artist"
          draggable
          @delete="showAlert(artist.id)"
          @moveUp="moveUp(artist.id)"
          @moveDown="moveDown(artist.id)"
        />
      </Draggable>
    </Container>
    <PaginationComponent
      v-if="artistsLength.length > limit"
      :pageSize="pageSize"
      :data="length"
      :current-page="currentPage"
      @page-changed="updatePagination"
    />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useArtistsStore } from '@/store/ArtistsStore';
import { useAuthStore } from '@/store/AuthStore';
import { ArtistItem, GallerySystemArtist } from '@/dataTypes/types';
import ArtistCard from '@/components/artists/ArtistCard.vue';
import InsideSearch from '@/components/search/InsideSearch.vue';
import ArtistPopup from '@/components/Modal/ArtistPopup.vue';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';
import { useGalleryStore } from '@/store/GalleriesStore';
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
import { Container, Draggable } from 'vue3-smooth-dnd';
import Swal from 'sweetalert2';
import { DebouncedFunc, times } from 'lodash';
import _ from 'lodash';

export default defineComponent({
  components: {
    MainLayout,
    ArtistCard,
    InsideSearch,
    ArtistPopup,
    SpinnerLoader,
    PaginationComponent,
    Container,
    Draggable,
  },
  data() {
    const auth = useAuthStore();
    const artistsStore = useArtistsStore();
    const galleryStore = useGalleryStore();
    return {
      auth,
      artistsStore,
      galleryStore,
      isLoading: true,
      artists: [] as ArtistItem[],
      artistsLength: [] as ArtistItem[],
      allArtists: [] as GallerySystemArtist[],
      search: '',
      show: false,
      offset: 0,
      limit: 20,
      currentPage: 1,
      isSaving: false,
      debouncedSearch: null as DebouncedFunc<(keyword: string) => void> | null,
    };
  },
  async created() {
    if (this.auth.isLoggedIn) {
      await this.fetchData();
      this.isLoading = false;
    }
    this.debouncedSearch = _.debounce(async (keyword: string) => {
      await this.searchArtists(keyword);
    }, 500);
  },
  methods: {
    async fetchData(keyword?: string) {
      const [artistsLength, allArtists] = await Promise.all([
        this.artistsStore.fetchMyArtistsLength(keyword),
        this.galleryStore.getAllArtists({
          limit: 20,
          offset: 0,
        }),
      ]);
      this.artistsLength = artistsLength;
      this.allArtists = allArtists;
      this.artists = this.artistsLength.slice(
        this.offset,
        this.offset + this.limit
      );

      this.offset = 0;
      this.currentPage = 1;
    },
    filterArtists(search: string) {
      this.search = search;
    },
    createIdOrderMap(artists: any[]) {
      const idOrderMap: any = {};
      const galleryArtists = artists.reverse();
      galleryArtists.forEach((item, index) => {
        const { id } = item;
        idOrderMap[id] = index + 1;
      });
      return idOrderMap;
    },
    async saveOrder() {
      const sortOrder = this.createIdOrderMap(this.artistsLength);
      this.isSaving = true;
      await this.galleryStore.saveOrderOfArtists(sortOrder);
      this.isSaving = false;
    },
    toggleShow() {
      this.show = !this.show;
    },
    async handleArtistDelete(id: number) {
      const response = await this.artistsStore.deleteArtist(id);
      if (response.success) {
        const index = this.filteredArtists.findIndex((item) => item.id === id);
        if (index !== -1) {
          this.filteredArtists.splice(index, 1);
        }
      }
    },
    async updatePagination(pageNumber: number) {
      this.isLoading = true;
      this.offset = (pageNumber - 1) * this.limit;
      this.artists = this.artistsLength.slice(
        this.offset,
        this.offset + this.limit
      );
      this.currentPage = pageNumber;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.isLoading = false;
    },
    onDrop(dropResult: any) {
      let { removedIndex, addedIndex } = dropResult;
      if (this.currentPage > 1) {
        removedIndex = removedIndex + this.offset;
        addedIndex = addedIndex + this.offset;
      }
      if (removedIndex !== null && addedIndex !== null) {
        const movedItem = this.artistsLength.splice(removedIndex, 1)[0];
        this.artistsLength.splice(addedIndex, 0, movedItem);
        this.artists.splice(addedIndex, 0, movedItem);
        this.artistsStore.allGalleryArtists = this.artistsLength;
        const artistsIds = this.artistsLength.map((item) => item.id);
        this.artists = this.artistsLength.slice(
          this.offset,
          this.offset + this.limit
        );
        this.artistsStore.artistsOrder = artistsIds;
      }
    },
    moveUp(id: number) {
      const index = this.artistsLength.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (index === 0 && this.offset === 0) {
          return;
        }
        const movedItem = this.artistsLength.splice(index, 1)[0];
        this.artistsLength.splice(index - 1, 0, movedItem);
        this.artistsStore.allGalleryArtists = this.artistsLength;
        const artistsIds = this.artistsLength.map((item) => item.id);
        this.artists = this.artistsLength.slice(
          this.offset,
          this.offset + this.limit
        );
        this.artistsStore.artistsOrder = artistsIds;
      }
    },
    moveDown(id: number) {
      const index = this.artistsLength.findIndex((item) => item.id === id);
      if (index !== -1 && index !== this.artistsLength.length - 1) {
        const movedItem = this.artistsLength.splice(index, 1)[0];
        this.artistsLength.splice(index + 1, 0, movedItem);
        this.artistsStore.allGalleryArtists = this.artistsLength;
        const artistsIds = this.artistsLength.map((item) => item.id);
        this.artists = this.artistsLength.slice(
          this.offset,
          this.offset + this.limit
        );
        this.artistsStore.artistsOrder = artistsIds;
      }
    },
    showAlert(id: number) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        confirmButtonColor: '#000',
        focusCancel: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.handleArtistDelete(id);
          Swal.fire('Deleted!', 'artist has been deleted.', 'success');
        }
      });
    },
    async addArtist(id: number) {
      const response = await this.artistsStore.addArtistToGallery(id);
      if (response.success) {
        await this.fetchData();
        Swal.fire({
          title: 'Success!',
          text: 'Artist added to gallery',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
        this.show = false;
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#000',
        });
      }
    },
    async searchArtists(keyword: string) {
      await this.fetchData(keyword);
    },
  },
  computed: {
    filteredArtists(): ArtistItem[] {
      return this.artists;
    },
    pageSize(): number {
      if (this.artistsLength.length < 20) {
        return this.artistsLength.length;
      } else {
        return 20;
      }
    },
    length(): number {
      return this.artistsLength.length;
    },
  },
  watch: {
    async search(newValue: string, oldValue: string) {
      if (this.debouncedSearch) {
        this.debouncedSearch(newValue);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  margin: 1rem 0 0 1rem;
  min-height: 3rem;
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    div {
      margin-bottom: 1rem;
    }
  }
  div {
    display: flex;
    margin-right: 1rem;
    background-color: $main-color;
    color: $secondary-color;
    text-decoration: none;
    padding: 0.5rem 1rem;
    align-items: center;

    @include sm-screen {
      padding: 0.2rem 0.2rem;
      text-align: center;
    }
    .save-loader {
      width: 1rem;
      height: 1rem;
      color: white;
      padding: 0;
      margin: 0;
      margin-left: 1rem;
    }
  }
}

.info {
  margin: 1rem 0 0 1rem;
  min-height: 3rem;
  font-style: italic;
  color: $gray;
}
</style>
