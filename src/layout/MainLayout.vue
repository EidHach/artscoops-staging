<template>
  <v-navigation-drawer
    app
    absolute
    v-model="drawer"
    class="sidebar"
    style="position: fixed"
  >
    <v-list-item><sidebarHeader :image="image" /> </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav style="padding: 0">
      <div v-if="isGallery">
        <v-list-item
          v-for="(item, index) in items"
          :key="item.title"
          link
          style="padding: 0"
        >
          <router-link
            v-if="index === 0"
            :to="'/'"
            class="tags-wrapper"
            active-class="router-link-active"
          >
            <v-list-item-icon>
              <v-icon :icon="item.icon">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
          <router-link
            v-else
            :to="`/${item.title.toLowerCase()}`"
            class="tags-wrapper"
            active-class="router-link-active"
          >
            <v-list-item-icon>
              <v-icon :icon="item.icon">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </div>
      <div v-else-if="isArtist">
        <v-list-item
          v-for="(item, index) in artistItems"
          :key="item.title"
          link
          style="padding: 0"
        >
          <router-link
            v-if="index === 0"
            :to="'/'"
            class="tags-wrapper"
            active-class="router-link-active"
          >
            <v-list-item-icon>
              <v-icon :icon="item.icon">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
          <router-link
            v-else-if="index === 1"
            :to="'/my_info'"
            class="tags-wrapper"
            active-class="router-link-active"
          >
            <v-list-item-icon>
              <v-icon :icon="item.icon">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
          <router-link
            v-else
            :to="`/${item.title.toLowerCase()}`"
            class="tags-wrapper"
            active-class="router-link-active"
          >
            <v-list-item-icon>
              <v-icon :icon="item.icon">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </div>
      <v-list-item link @click="logout">
        <div class="tags-wrapper">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar class="d-flex align-center" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>
    <span class="title mx-2">{{ getTitle() }}</span>
  </v-app-bar>

  <v-main>
    <SpinnerLoader v-if="isLoading" />
    <slot v-else />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sidebarHeader from '@/components/sidebar/sidebarHeader.vue';
import { Data, UserRecord, ArtistItem } from '@/dataTypes/types';
import { useAuthStore } from '@/store/AuthStore';
import { useUserStore } from '@/store/UserStore';
import { useGalleryStore } from '@/store/GalleriesStore';
import { useArtistsStore } from '@/store/ArtistsStore';
import SpinnerLoader from '@/components/loader/SpinnerLoader.vue';
import router from '@/router';
import { isObjEmpty } from '@/helpers/emptyObjectsChecker';

export default defineComponent({
  name: 'MainLayout',
  components: { sidebarHeader, SpinnerLoader },
  data() {
    const auth = useAuthStore();
    const user = useUserStore();
    window.authStore = auth;

    const gallery = useGalleryStore();
    const artist = useArtistsStore();
    return {
      auth,
      user,
      gallery,
      artist,
      drawer: true,
      isArtist: false,
      isGallery: false,
      userInfo: {} as UserRecord,
      galleryInfo: {} as Data,
      artistInfo: {} as ArtistItem,
      role: '',
      name: '',
      userName: '',
      image: '',
      items: [
        { title: 'STATS', icon: 'mdi-view-dashboard' },
        { title: 'ARTISTS', icon: 'mdi-account-box' },
        { title: 'ARTWORKS', icon: 'mdi-palette' },
        { title: 'SHOWS', icon: 'mdi-store' },
        { title: 'OFFERS', icon: 'mdi-tag' },
        { title: 'SEARCH', icon: 'mdi-magnify' },
        { title: 'INBOX', icon: 'mdi-inbox-arrow-down' },
        { title: 'HELP', icon: 'mdi-help' },
        { title: 'SETTINGS', icon: 'mdi-cog' },
      ],
      artistItems: [
        { title: 'STATS', icon: 'mdi-view-dashboard' },
        { title: 'MY INFO', icon: 'mdi-account-box' },
        { title: 'ARTWORKS', icon: 'mdi-palette' },
        { title: 'HELP', icon: 'mdi-help' },
        { title: 'SETTINGS', icon: 'mdi-cog' },
      ],
      isLoading: true,
    };
  },
  async mounted() {
    if (!this.auth.isLoggedIn) {
      router.push('/login');
    } else {
      await this.assignRoles();

      this.drawer = this.user.drawer;

      if (this.isGallery) {
        await this.galleryProfile();
      }
      if (this.isArtist) {
        await this.artistProfile();
      }
      this.isLoading = false;

      if (window.innerWidth < 768) {
        this.user.drawer = false;
        this.drawer = this.user.drawer;
      }
    }
  },

  methods: {
    logout() {
      this.auth.logout();
      router.push('/login');
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
      this.user.drawer = this.drawer;
    },
    getTitle() {
      const path = this.$route.path.substring(1).toUpperCase()?.split('/')[0];
      const greeting = `Hello ${this.name}`;
      const user = `(${this.userName})`;
      if (this.userName) {
        return path || `${greeting} ${user}`;
      } else {
        return path || greeting;
      }
    },
    async assignRoles() {
      if (!this.auth.userInfo.id) {
        this.userInfo = await this.auth.fetchUserInfo();
      }
      this.userInfo = this.auth.userInfo;
      this.role = this.userInfo.role;
      this.isArtist = this.auth.userRole === 'artist';
      this.isGallery = this.auth.userRole === 'gallery';
    },
    async galleryProfile() {
      if (isObjEmpty(this.gallery.galleryInfo)) {
        this.galleryInfo = await this.gallery.getInfo();
      }
      this.galleryInfo = this.gallery.galleryInfo;
      this.name = this.galleryInfo?.gallery?.title || '';
      this.image = this.galleryInfo?.gallery?.image?.original || '';
      this.userName = this.galleryInfo?.user?.first_name || '';
    },
    async artistProfile() {
      if (isObjEmpty(this.artist.artistInfo)) {
        this.artistInfo = await this.artist.getInfo();
      }
      this.artistInfo = this.artist.artistInfo;
      this.name = this.artistInfo?.first_name || '';
      this.image = this.artistInfo?.image?.original || '';
    },
  },
});
</script>

<style lang="scss" scoped>
.tags-wrapper {
  color: #000;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem 1rem;
}

.router-link-active {
  background-color: $light-gray;
}
</style>
