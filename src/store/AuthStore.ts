import AuthService from '@/api/authService';
import { UserRecord } from '@/dataTypes/types';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { useShowsStore } from './ShowsStore';
import { useUserStore } from './UserStore';
import { useArtistsStore } from './ArtistsStore';
import { useGalleryStore } from './GalleriesStore';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      token: '',
      userInfo: {} as UserRecord,
      isArtist: false,
      isGallery: false,
      isAuctioneer: false,
    };
  },
  persist: true,
  getters: {
    isLoggedIn: (state) => {
      return state.token !== '';
    },
    userRole: (state) => {
      return state.userInfo.role;
    },
  },
  actions: {
    async login(email: string, password: string) {
      const user = await AuthService.login(email, password);
      if (typeof user === 'undefined') {
        return false;
      }
      this.token = user.auth_token;
      if (user.success) {
        this.fetchUserInfo();
      }

      return user;
    },
    logout() {
      Cookies.remove('artscoops_auth');
      this.clearAllStoresStates();
    },
    getUserInfo(): UserRecord {
      this.token = this.userInfo.auth_token;
      return this.userInfo;
    },
    async fetchUserInfo(): Promise<UserRecord> {
      const response = await AuthService.getUserInfo();
      this.userInfo = response.data;
      this.token = this.userInfo.auth_token;
      return this.userInfo;
    },
    async resetPassword(email: string) {
      const response = await AuthService.resetPassword(email);
      return response.success;
    },
    clearAllStoresStates() {
      this.token = '';
      this.userInfo = {} as UserRecord;
      this.isArtist = false;
      this.isGallery = false;
      this.isAuctioneer = false;
      useUserStore().clearState();
      useShowsStore().clearState();
      useArtistsStore().clearState();
      useGalleryStore().clearState();
    },
  },
});
