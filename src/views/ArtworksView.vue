<template>
  <MainLayout>
    <SpinnerLoader v-if="isLoading" />
    <div v-else>
      <ArtworkImagePopup
        v-if="isOpen"
        :artwork="getArtworkId()"
        :show="isOpen"
        @close="isOpen = false"
      />
      <div class="header">
        <h4>ARTWORKS IN YOUR ACCOUNT</h4>
      </div>
      <v-divider></v-divider>
      <InsideSearch button="Add Artwork" @search="filterArtworks" />
      <v-divider></v-divider>
      <div class="info-container">
        <p class="info">
          Move your Artworks around by dragging and dropping them into your
          preferred order!
        </p>
        <div style="cursor: pointer" @click="saveOrder">
          Save Order
          <SpinnerLoader v-if="isSaving" :color="'white'" class="save-loader" />
        </div>
      </div>
      <v-divider></v-divider>
      <section class="artworks-container">
        <Container orientation="vertical" @drop="onDrop">
          <Draggable v-for="artwork in filteredArtworks" :key="artwork.id">
            <ArtworkCard
              :artwork="artwork"
              :role="role"
              draggable
              @moveUp="moveUp(artwork.id)"
              @moveDown="moveDown(artwork.id)"
              @duplicate="duplicateArtwork(artwork.id)"
              @display-images="
                popupId = artwork.id;
                isOpen = true;
              "
            />
          </Draggable>
        </Container>
      </section>
      <div v-if="role === 'gallery'">
        <PaginationComponent
          v-if="artworksLength.length > limit"
          :pageSize="pageSize"
          :data="length"
          :current-page="currentPage"
          @page-changed="updatePagination"
        />
      </div>
      <div v-else>
        <PaginationComponent
          :pageSize="pageSize"
          :data="length"
          :current-page="currentPage"
          @page-changed="updatePagination"
        />
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useAuthStore } from '@/store/AuthStore';
// import { useArtworksStore } from "@/store/ArtworksStore";
import { useGalleryStore } from '@/store/GalleriesStore';
import { useArtistsStore } from '@/store/ArtistsStore';
import { ArtworksRecord } from '@/dataTypes/types';
import ArtworkCard from '@/components/artworks/ArtworkCard.vue';
import InsideSearch from '@/components/search/InsideSearch.vue';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
import ArtworkImagePopup from '@/components/artworks/ArtworkImagePopup.vue';
import { Container, Draggable } from 'vue3-smooth-dnd';
import _, { DebouncedFunc } from 'lodash';

export default defineComponent({
  components: {
    MainLayout,
    InsideSearch,
    ArtworkCard,
    SpinnerLoader,
    PaginationComponent,
    ArtworkImagePopup,
    Container,
    Draggable,
  },
  data() {
    const authStore = useAuthStore();
    // const artworksStore = useArtworksStore();
    const artistsStore = useArtistsStore();
    const galleryStore = useGalleryStore();
    return {
      // artworksStore,
      authStore,
      artistsStore,
      galleryStore,
      role: '',
      artworks: [] as ArtworksRecord[],
      artworksLength: [] as ArtworksRecord[],
      allArtistArtworks: [] as ArtworksRecord[],
      artistArtworks: [] as ArtworksRecord[],
      artistArtworksLength: 0,
      search: '',
      isLoading: true,
      offset: 0,
      limit: 20,
      popupId: -1,
      isOpen: false,
      currentPage: 1,
      isSaving: false,
      debouncedSearch: null as DebouncedFunc<(keyword: string) => void> | null,
    };
  },
  async created() {
    if (this.authStore.isLoggedIn) {
      this.role = this.authStore.userRole;
      if (this.role === 'gallery') {
        await this.getGalleryArtworks();
      } else {
        await this.getArtistArtworks();
      }
      this.isLoading = false;
      this.debouncedSearch = _.debounce(async (keyword: string) => {
        await this.searchArtworks(keyword);
      }, 500);
    }
  },
  methods: {
    async getGalleryArtworks(keyword?: string) {
      this.artworksLength = await this.galleryStore.getMyArtworksLength(
        keyword
      );
      this.artworks = this.artworksLength.slice(this.offset, this.limit);
    },
    async getArtistArtworks(keyword?: string) {
      const { items: artistArtworks, total: artistArtworksLength } =
        await this.artistsStore.fetchArtistArtworks(keyword);
      this.allArtistArtworks = artistArtworks;
      this.artistArtworks = this.allArtistArtworks.slice(
        this.offset,
        this.limit
      );
      this.artistArtworksLength = artistArtworksLength;
    },
    createIdOrderMap(artworks: any[]) {
      const idOrderMap: any = {};
      const artistArtworks = artworks.reverse();
      artistArtworks.forEach((item, index) => {
        const { id } = item;
        idOrderMap[id] = index + 1;
      });
      return idOrderMap;
    },
    async saveOrder() {
      if (this.role === 'gallery') {
        const sortOrder = this.createIdOrderMap(this.artworksLength);
        this.isSaving = true;
        await this.galleryStore.saveOrderOfArtwork(sortOrder);
        this.isSaving = false;
      } else {
        const sortOrder = this.createIdOrderMap(this.allArtistArtworks);
        this.isSaving = true;
        await this.artistsStore.saveOrderOfArtwork(sortOrder);
        this.isSaving = false;
      }
    },
    filterArtworks(search: string) {
      this.search = search;
    },
    async updatePagination(pageNumber: number) {
      this.isLoading = true;
      this.offset = (pageNumber - 1) * this.limit;
      if (this.role === 'gallery') {
        this.artworks = this.artworksLength.slice(
          this.offset,
          this.offset + this.limit
        );
      } else if (this.role === 'artist') {
        this.artistArtworks = this.allArtistArtworks.slice(
          this.offset,
          this.offset + this.limit
        );
      }
      this.currentPage = pageNumber;
      this.isLoading = false;
    },
    duplicateArtwork(id: number) {
      this.isLoading = true;
      this.$router.push(`/artworks/${id}/duplicate`);
    },
    displayArtworkImages(id: number) {
      this.isOpen = true;
      this.popupId = id;
    },
    getArtworkId(): ArtworksRecord | undefined {
      return this.artworks.find(
        (artwork: ArtworksRecord) => artwork.id === this.popupId
      );
    },
    async onDrop(dropResult: any) {
      let { removedIndex, addedIndex } = dropResult;
      if (this.currentPage > 1) {
        removedIndex = removedIndex + this.offset;
        addedIndex = addedIndex + this.offset;
      }
      if (
        removedIndex !== null &&
        addedIndex !== null &&
        this.role === 'gallery'
      ) {
        const movedItem = this.artworksLength.splice(removedIndex, 1)[0];
        this.artworksLength.splice(addedIndex, 0, movedItem);
        this.galleryStore.galleryArtworksLength = this.artworksLength;
        const artworkIds = this.artworksLength.map((item) => item.id);
        this.artworks = this.artworksLength.slice(
          this.offset,
          this.offset + this.limit
        );
      } else if (
        removedIndex !== null &&
        addedIndex !== null &&
        this.role === 'artist'
      ) {
        const movedItem = this.allArtistArtworks.splice(removedIndex, 1)[0];
        this.allArtistArtworks.splice(addedIndex, 0, movedItem);
        this.artistsStore.artistArtworks = this.allArtistArtworks;
        const artworkIds = this.allArtistArtworks.map((item) => item.id);
        this.artistArtworks = this.allArtistArtworks.slice(
          this.offset,
          this.offset + this.limit
        );
      }
    },
    async moveUp(id: number) {
      const index = this.artworksLength.findIndex((item) => item.id === id);
      const artistIndex = this.allArtistArtworks.findIndex(
        (item) => item.id === id
      );
      if (index !== -1 && this.role === 'gallery') {
        if (index === 0 && this.offset === 0) {
          return;
        }
        const movedItem = this.artworksLength.splice(index, 1)[0];
        this.artworksLength.splice(index - 1, 0, movedItem);
        // this.artistsStore.allGalleryArtists = this.artistsLength;
        const artworkIds = this.artworksLength.map((item) => item.id);
        this.artworks = this.artworksLength.slice(
          this.offset,
          this.offset + this.limit
        );
      }
      if (artistIndex !== -1 && this.role === 'artist') {
        if (index === 0 && this.offset === 0) {
          return;
        }
        const movedItem = this.allArtistArtworks.splice(artistIndex, 1)[0];
        this.allArtistArtworks.splice(artistIndex - 1, 0, movedItem);
        // this.artistsStore.allGalleryArtists = this.artistsLength;
        const artworkIds = this.allArtistArtworks.map((item) => item.id);
        this.artistArtworks = this.allArtistArtworks.slice(
          this.offset,
          this.offset + this.limit
        );
      }
    },
    async moveDown(id: number) {
      const index = this.artworksLength.findIndex((item) => item.id === id);
      const artistIndex = this.allArtistArtworks.findIndex(
        (item) => item.id === id
      );
      if (index !== -1 && this.role === 'gallery') {
        const movedItem = this.artworksLength.splice(index, 1)[0];
        this.artworksLength.splice(index + 1, 0, movedItem);
        // this.artistsStore.allGalleryArtists = this.artistsLength;
        const artistsIds = this.artworksLength.map((item) => item.id);
        this.artworks = this.artworksLength.slice(
          this.offset,
          this.offset + this.limit
        );
      }
      if (artistIndex !== -1 && this.role === 'artist') {
        const movedItem = this.allArtistArtworks.splice(artistIndex, 1)[0];
        this.allArtistArtworks.splice(artistIndex + 1, 0, movedItem);
        // this.artistsStore.allGalleryArtists = this.artistsLength;
        const artistsIds = this.allArtistArtworks.map((item) => item.id);
        this.artistArtworks = this.allArtistArtworks.slice(
          this.offset,
          this.offset + this.limit
        );
      }
    },
    async searchArtworks(keyword: string) {
      if (this.role === 'gallery') {
        await this.getGalleryArtworks(keyword);
      } else if (this.role === 'artist') {
        await this.getArtistArtworks(keyword);
      }
    },
  },
  computed: {
    filteredArtworks(): ArtworksRecord[] {
      if (this.role === 'gallery') {
        return this.artworks;
      } else if (this.role === 'artist') {
        return this.artistArtworks;
      }
      return [];
    },
    length(): number {
      return this.artworksLength.length;
    },
    pageSize(): number {
      if (this.role === 'gallery') {
        if (this.artworksLength.length < 20) {
          return this.artworksLength.length;
        } else {
          return 20;
        }
      } else {
        if (this.allArtistArtworks.length < 20) {
          return this.allArtistArtworks.length;
        } else {
          return 20;
        }
      }
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
.header {
  margin: 1rem 0 0 1rem;
  min-height: 3rem;
}

.info {
  margin: 1rem 0 0 1rem;
  min-height: 3rem;
  font-style: italic;
  color: $gray;
}
</style>
