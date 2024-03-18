import UserService from '@/api/userService';

import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {},
    drawer: true,
  }),
  persist: true,
  actions: {
    async getInfo(type: string) {
      if (type === 'artist') {
        const data = await UserService.getInfo(type);
        this.user = data.user;
        return data.artist;
      } else if (type === 'gallery') {
        const data = await UserService.getInfo(type);
        this.user = data;
        console.log(this.user)
        return data.gallery.user;
      }
    },
    clearState() {
      this.user = {};
    },
  },
});
