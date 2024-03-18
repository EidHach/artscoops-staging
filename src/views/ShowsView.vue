<template>
  <MainLayout>
    <SpinnerLoader v-if="isLoading" />
    <div v-else>
      <div class="header">
        <h4>SHOWS IN YOUR ACCOUNT</h4>
      </div>
      <v-divider></v-divider>
      <InsideSearch button="Add Show" @search="filterShows" />
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
      <Container orientation="vertical" @drop="onDrop">
        <Draggable v-for="show in filteredGalleryShows" :key="show.id">
          <ShowCard
            :exhibition="show"
            draggable
            @delete="showAlert(show.id)"
            @moveUp="moveUp(show.id)"
            @moveDown="moveDown(show.id)"
          />
        </Draggable>
      </Container>
      <PaginationComponent
        v-if="allGalleryShows.length > limit"
        :pageSize="pageSize"
        :data="length"
        :current-page="currentPage"
        @page-changed="updatePagination"
      />
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import InsideSearch from '@/components/search/InsideSearch.vue';
import { useAuthStore } from '@/store/AuthStore';
import { useShowsStore } from '@/store/ShowsStore';
import { useGalleryStore } from '@/store/GalleriesStore';
import { GalleryShowsData, GalleryShowsItem } from '@/dataTypes/types';
import ShowCard from '@/components/shows/ShowCard.vue';
import { Container, Draggable } from 'vue3-smooth-dnd';
import PaginationComponent from '@/components/pagination/PaginationComponent.vue';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';
import Swal from 'sweetalert2';
import { DebouncedFunc, times } from 'lodash';
import _ from 'lodash';

export default defineComponent({
  components: {
    MainLayout,
    InsideSearch,
    ShowCard,
    Container,
    Draggable,
    PaginationComponent,
    SpinnerLoader,
  },
  data() {
    const Auth = useAuthStore();
    const Shows = useShowsStore();
    const Gallery = useGalleryStore();
    return {
      Auth,
      Shows,
      Gallery,
      response: {} as GalleryShowsData,
      galleryShows: [] as GalleryShowsItem[],
      allGalleryShows: [] as GalleryShowsItem[],
      showsTotal: 0,
      currentPage: 1,
      offset: 0,
      limit: 20,
      isLoading: true,
      search: '',
      isSaving: false,
      debouncedSearch: null as DebouncedFunc<(keyword: string) => void> | null,
    };
  },
  async mounted() {
    if (this.Auth.isLoggedIn) {
      this.Auth.getUserInfo;
      this.getShows();
    }
    this.debouncedSearch = _.debounce(async (keyword: string) => {
      await this.searchShows(keyword);
    }, 500);
  },
  methods: {
    async getShows(keyword?: string) {
      const { items: galleryShows, total: showsTotal } =
        await this.Shows.fetchGalleryShows(keyword);
      this.allGalleryShows = galleryShows;
      this.galleryShows = this.allGalleryShows.slice(this.offset, this.limit);
      this.showsTotal = showsTotal;
      this.isLoading = false;
    },
    filterShows(search: string) {
      this.search = search;
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
      const sortOrder = this.createIdOrderMap(this.allGalleryShows);
      this.isSaving = true;
      await this.Gallery.saveOrderOfShows(sortOrder);
      this.isSaving = false;
    },
    async deleteExhibition(id: number) {
      const response = await this.Shows.DeleteShow(id);
      if (response.success) {
        const index = this.galleryShows.findIndex((item) => item.id === id);
        if (index !== -1) {
          this.galleryShows.splice(index, 1);
          this.showsTotal--;
        }
      }
    },
    onDrop(dropResult: any) {
      let { removedIndex, addedIndex } = dropResult;
      if (this.currentPage > 1) {
        removedIndex = removedIndex + this.offset;
        addedIndex = addedIndex + this.offset;
      }
      if (removedIndex !== null && addedIndex !== null) {
        const movedItem = this.allGalleryShows.splice(removedIndex, 1)[0];
        this.allGalleryShows.splice(addedIndex, 0, movedItem);
        this.Shows.shows = this.allGalleryShows;
        const showsIds = this.allGalleryShows.map((item) => item.id);
        this.galleryShows = this.allGalleryShows.slice(
          this.offset,
          this.offset + this.limit
        );
      }
    },
    moveUp(id: number) {
      const index = this.allGalleryShows.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (index === 0 && this.offset === 0) {
          return;
        }
        const movedItem = this.allGalleryShows.splice(index, 1)[0];
        this.allGalleryShows.splice(index - 1, 0, movedItem);
        this.Shows.shows = this.allGalleryShows;
        const showsIds = this.allGalleryShows.map((item) => item.id);
        this.galleryShows = this.allGalleryShows.slice(
          this.offset,
          this.offset + this.limit
        );
      }
    },
    moveDown(id: number) {
      const index = this.allGalleryShows.findIndex((item) => item.id === id);
      if (index !== -1) {
        const movedItem = this.allGalleryShows.splice(index, 1)[0];
        this.allGalleryShows.splice(index + 1, 0, movedItem);
        this.Shows.shows = this.allGalleryShows;
        const showsIds = this.allGalleryShows.map((item) => item.id);
        this.galleryShows = this.allGalleryShows.slice(
          this.offset,
          this.offset + this.limit
        );
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
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteExhibition(id);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else if (result.isDenied) {
          Swal.fire('Delete failed', '', 'info');
        }
      });
    },
    updatePagination(pageNumber: number) {
      this.isLoading = true;
      this.offset = (pageNumber - 1) * this.limit;
      this.galleryShows = this.allGalleryShows.slice(
        this.offset,
        this.offset + this.limit
      );
      this.currentPage = pageNumber;
      this.isLoading = false;
    },
    async searchShows(keyword: string) {
      await this.getShows(keyword);
    },
  },
  computed: {
    filteredGalleryShows(): GalleryShowsItem[] {
      return this.galleryShows;
    },
    pageSize(): number {
      if (this.showsTotal < 20) {
        return this.showsTotal;
      } else {
        return 20;
      }
    },
    length(): number {
      return this.showsTotal;
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
