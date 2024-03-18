<template>
  <MainLayout>
    <form @submit.prevent="filter(search)">
      <label for="search">Keyword</label>
      <input type="text" id="search" placeholder="My artist" v-model="search" />
      <input type="submit" value="Search" />
    </form>
    <section v-if="artists.length && search">
      <ArtistCard
        v-for="artist in filteredArtists"
        :key="artist.id"
        :artist="artist"
      />
    </section>
    <section v-if="artworks.length && search">
      <ArtworkCard
        v-for="artwork in filteredArtworks"
        :key="artwork.id"
        :artwork="artwork"
        role="gallery"
      />
    </section>
    <section v-if="shows.length && search">
      <ShowCard
        v-for="show in filteredShows"
        :key="show.id"
        :exhibition="show"
      />
    </section>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useAuthStore } from '@/store/AuthStore';
import { useArtistsStore } from '@/store/ArtistsStore';
import { useShowsStore } from '@/store/ShowsStore';
// import { useArtworksStore } from "@/store/ArtworksStore";
import { useGalleryStore } from '@/store/GalleriesStore';
import {
  ArtistItem,
  ArtworksRecord,
  GalleryShowsItem,
} from '@/dataTypes/types';
import ArtistCard from '@/components/artists/ArtistCard.vue';
import ArtworkCard from '@/components/artworks/ArtworkCard.vue';
import ShowCard from '@/components/shows/ShowCard.vue';

export default defineComponent({
  components: { MainLayout, ArtworkCard, ArtistCard, ShowCard },
  data() {
    const authStore = useAuthStore();
    const artistsStore = useArtistsStore();
    // const artworksStore = useArtworksStore();
    const galleryStore = useGalleryStore();
    const showsStore = useShowsStore();
    return {
      authStore,
      artistsStore,
      galleryStore,
      showsStore,
      artists: [] as ArtistItem[],
      shows: [] as GalleryShowsItem[],
      artworks: [] as ArtworksRecord[],
      search: '',
    };
  },
  async created() {
    if (this.authStore.isLoggedIn) {
      this.artists = await this.artistsStore.fetchMyArtistsLength();
      this.artworks = await this.galleryStore.getMyArtworks();
      const { items: galleryShows } = await this.showsStore.fetchGalleryShows();
      this.shows = galleryShows;
    }
  },
  methods: {
    filter(search: string) {
      this.search = search;
    },
  },
  computed: {
    filteredArtists(): ArtistItem[] {
      if (!this.search) {
        return this.artists;
      }
      const query = this.search.toLowerCase();
      return this.artists.filter((artist) =>
        artist.full_name.toLowerCase().includes(query)
      );
    },
    filteredArtworks(): ArtworksRecord[] {
      if (!this.search) {
        return this.artworks;
      }
      const query = this.search.toLowerCase();
      return this.artworks.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(query) ||
          artwork.artist.full_name.toLowerCase().includes(query)
      );
    },
    filteredShows(): GalleryShowsItem[] {
      if (!this.search) {
        return this.shows;
      }
      const query = this.search.toLowerCase();
      return this.shows.filter((show) =>
        show.title.toLowerCase().includes(query)
      );
    },
  },
});
</script>

<style lang="scss" scoped>
form {
  @include flex-box(column, flex-start, flex-start);
  @include sm-screen {
    @include flex-box(column, center, center);
    max-width: 100%;
    margin: 2rem 0;
    padding: 0 1rem;
  }
  margin: 3rem 0 0 1rem;
  max-width: 50%;

  label {
    font-weight: 700;
  }

  input {
    padding: 0.3rem 1rem;
    margin-top: 1rem;
    width: 100%;
  }

  input[type='text'] {
    border: 1px solid $main-color;
  }

  input[type='submit'] {
    background-color: $main-color;
    color: $secondary-color;
  }
}
</style>
