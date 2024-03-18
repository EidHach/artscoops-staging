import ShowsService from '@/api/showsService';
import { GalleryShowsData, GalleryShowsItem } from '@/dataTypes/types';

import { defineStore } from 'pinia';

export const useShowsStore = defineStore({
  id: 'shows',
  state: () => {
    return {
      shows: [] as GalleryShowsItem[],
      show: {} as GalleryShowsItem,
      total: 0,
    };
  },
  actions: {
    async fetchGalleryShows(
      keyword?: string,
      limit?: number,
      offset?: number
    ): Promise<{ items: GalleryShowsItem[]; total: number }> {
      const { items, total } = await ShowsService.fetchGalleryShows(
        keyword,
        limit,
        offset
      );
      this.shows = items;
      this.total = total;
      return { items, total };
    },
    async DeleteShow(id: number) {
      const response = await ShowsService.delete(
        `/galleries/exhibitions/${id}`
      );
      this.shows = this.shows.filter((show) => show.id !== id);
      return response;
    },
    async fetchGalleryShow(id: number) {
      const response = await ShowsService.fetchGalleryShow(id);
      this.show = response;
      return response;
    },
    async UpdateExhibition(id: number, data: any) {
      const response = await ShowsService.UpdateExhibition(id, data);
      await this.fetchGalleryShows();
      return response.success;
    },
    async CreateExhibition(data: any) {
      const response = await ShowsService.CreateExhibition(data);
      await this.fetchGalleryShows();
      return response.success;
    },
    clearState() {
      this.shows = [];
      this.show = {} as GalleryShowsItem;
      this.total = 0;
    },
  },
});
