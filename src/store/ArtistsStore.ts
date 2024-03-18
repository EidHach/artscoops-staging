import ArtistsService from '@/api/artistsService';
import {
  ArtistArtworksData,
  ArtistItem,
  ArtworksRecord,
  SortOrder,
} from '@/dataTypes/types';
import { defineStore } from 'pinia';

// you will need to update this file according to your needs

export const useArtistsStore = defineStore({
  id: 'artists',
  state: () => {
    return {
      artists: [] as ArtistItem[],
      allGalleryArtists: [] as ArtistItem[],
      myArtists: [] as ArtistItem[],
      artistInfo: {} as ArtistItem,
      artistArtworks: [] as ArtworksRecord[],
      artistArtworkLength: 0,
      artistArtwork: {} as ArtistArtworksData,
      artistAnalytics: {},
      artistsOrder: [] as number[],
    };
  },
  persist: true,
  actions: {
    async getInfo() {
      const data = await ArtistsService.getInfo();
      this.artistInfo = data.artist;
      this.artistAnalytics = data;
      return data.artist;
    },
    async fetchMyArtistsLength(keyword = '', limit = 10000000, offset = 0) {
      const artists = await ArtistsService.getMyArtists(keyword, limit, offset);
      this.allGalleryArtists = artists;
      return artists;
    },
    async deleteArtist(id: number) {
      const response = await ArtistsService.deleteArtist(id);
      this.artists = this.artists.filter((artist) => artist.id !== id);
      this.allGalleryArtists = this.allGalleryArtists.filter(
        (artist) => artist.id !== id
      );
      this.myArtists = this.myArtists.filter((artist) => artist.id !== id);
      return response;
    },
    async fetchArtistArtworks(keyword = '', limit = 1000, offset = 0) {
      const { items, total } = await ArtistsService.fetchArtistArtworks(
        keyword,
        limit,
        offset
      );
      this.artistArtworks = items;
      this.artistArtworkLength = total;
      return { items, total };
    },
    async updateArtistInfo(data: any) {
      const response = await ArtistsService.updateArtistInfo(data);
      this.getInfo();
      return response;
    },
    async createArtwork(artwork: any) {
      const response = await ArtistsService.createArtwork(artwork);
      this.fetchArtistArtworks();
      return response;
    },
    async fetchArtistArtwork(id: number) {
      const response = await ArtistsService.fetchArtistArtwork(id);
      this.artistArtwork = response;
      return response;
    },
    async updateArtwork(id: number, artwork: any) {
      const response = await ArtistsService.updateArtwork(id, artwork);
      this.fetchArtistArtwork(id);
      return response;
    },
    async addArtistToGallery(id: number) {
      const response = await ArtistsService.addArtistToGallery(id);
      this.fetchMyArtistsLength();
      return response;
    },
    async saveOrderOfArtwork(sortOrder: SortOrder) {
      const response = await ArtistsService.saveArtworkOrder(sortOrder);
      this.fetchMyArtistsLength();
      return response;
    },
    clearState() {
      this.artists = [];
      this.allGalleryArtists = [];
      this.myArtists = [];
      this.artistInfo = {} as ArtistItem;
      this.artistArtworks = [];
      this.artistArtworkLength = 0;
      this.artistArtwork = {} as ArtistArtworksData;
      this.artistAnalytics = {};
    },
  },
});
