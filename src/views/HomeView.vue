<template>
  <MainLayout>
    <SpinnerLoader v-if="isLoading" />
    <div v-else>
      <RowComponent>
        <template #title>YOUR STATS</template>
      </RowComponent>
      <v-divider></v-divider>
      <RowComponent>
        <template #title>ARTISTS</template>
        <template #count>{{ artistsCount }}</template>
        <template #action
          ><button
            v-if="type === 'gallery'"
            type="button"
            class="btn"
            @click="$router.push('/artists')"
          >
            VIEW ARTISTS
          </button></template
        >
      </RowComponent>
      <v-divider></v-divider>
      <RowComponent>
        <template #title>ARTWORKS</template>
        <template #count>{{ artworksDetails.total }}</template>
        <template #details
          ><div>
            <p>LIVE ON ARTSCOOPS: {{ artworksDetails.live }}</p>
            <p>FOR SALE: {{ artworksDetails.for_sale }}</p>
            <p>PENDING GOING LIVE: {{ artworksDetails.pending }}</p>
          </div></template
        >
        <template #action
          ><button
            type="button"
            class="btn"
            @click="$router.push('/artworks/new')"
          >
            ADD ARTWORK
          </button></template
        >
      </RowComponent>
      <v-divider></v-divider>
      <RowComponent>
        <template #title>SHOWS</template>
        <template #count>{{ showsCount }}</template>
        <template #action
          ><button
            v-if="type === 'gallery'"
            type="button"
            class="btn"
            @click="$router.push('/shows/add')"
          >
            ADD SHOW
          </button></template
        >
      </RowComponent>
      <v-divider></v-divider>
      <RowComponent>
        <template #title>ANALYTICS</template>
      </RowComponent>
      <v-divider></v-divider>
      <div class="top-ten-wrapper">
        <div v-if="type === 'gallery'">
          <TopTenListComponent :items="artistsAnalytics" title="artists" />
        </div>
        <div>
          <TopTenListComponent :items="artworksAnalytics" title="artworks" />
        </div>
        <div>
          <TopTenListComponent :items="countriesAnalytics" title="countries" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import RowComponent from '@/components/stats/RowComponent.vue';
import { useGalleryStore } from '@/store/GalleriesStore';
import { useArtistsStore } from '@/store/ArtistsStore';
import { useAuthStore } from '@/store/AuthStore';
import {
  AnalyticsData,
  DashboardAnalytics,
  Data,
  Artworks,
  UserRecord,
  Analytics,
  LikesAnalytics,
  Image,
} from '@/dataTypes/types';
import TopTenListComponent from '@/components/stats/TopTenListComponent.vue';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';

export interface ThisArtist {
  id: number;
  first_name: string;
  last_name: string;
  is_featured: boolean | null;
  region_id: number;
  country_id: number;
  full_name: string;
  artworks: Artworks;
  analytics: Analytics;
  likes_analytics: LikesAnalytics;
  dashboard_analytics: DashboardAnalytics;
  image: Image;
  cv_file: null;
  about: null;
  website: null;
  articles: any[];
  key_collections: any[];
  selected_exhibitions: any[];
}

export default defineComponent({
  name: 'HomeView',
  components: { MainLayout, RowComponent, TopTenListComponent, SpinnerLoader },
  data() {
    const gallery = useGalleryStore();
    const artist = useArtistsStore();
    const auth = useAuthStore();
    return {
      gallery,
      auth,
      artist,
      userInfo: {} as UserRecord,
      galleryInfo: {} as Data,
      galleryAnalytics: {} as DashboardAnalytics,
      artistsAnalytics: [] as AnalyticsData[],
      artworksAnalytics: [] as AnalyticsData[],
      countriesAnalytics: [] as AnalyticsData[],
      artistInfo: {} as ThisArtist,
      artistsCount: 0,
      artworksData: 0,
      artworksDetails: {} as Artworks,
      showsCount: 0,
      isLoading: true,
      type: '',
    };
  },
  async created() {
    if (this.auth.isLoggedIn) {
      this.userInfo = await this.auth.fetchUserInfo();
      this.type = this.userInfo.role;
      if (this.type === 'gallery') {
        this.galleryInfo = await this.gallery.getInfo();
        this.artistsAnalytics =
          this.galleryInfo.gallery.dashboard_analytics.artists;
        this.artworksAnalytics =
          this.galleryInfo.gallery.dashboard_analytics.artworks;
        this.countriesAnalytics =
          this.galleryInfo.gallery.dashboard_analytics.countries;
        this.artistsCount = this.galleryInfo.gallery.artists;
        this.artworksDetails = this.galleryInfo.gallery.artworks;
        this.showsCount = this.galleryInfo.gallery.shows;
      } else if (this.type === 'artist') {
        this.artistInfo = await this.artist.getInfo();
        this.artworksAnalytics = this.artistInfo?.dashboard_analytics?.artworks;
        this.countriesAnalytics =
          this.artistInfo?.dashboard_analytics?.countries;
      }
      this.isLoading = false;
    }
  },
  mounted() {
    const auth = useAuthStore();
    this.type = auth.userInfo.role;
  },
  updated() {
    const auth = useAuthStore();
    this.type = auth.userInfo.role;
  },
  beforeUnmount() {
    const auth = useAuthStore();
    this.type = auth.userInfo.role;
  },
});
</script>

<style lang="scss" scoped>
.btn {
  width: 9rem;
  background-color: $main-color;
  color: $secondary-color;
  padding: 0.3rem;
}

.top-ten-wrapper {
  @include flex-box(null, center, flex-start);
  padding: 2rem 10rem;
  gap: 15rem;

  @include sm-screen {
    padding: 2rem 1rem;
    gap: 1rem;
  }
}
</style>
