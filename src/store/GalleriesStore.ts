import GalleriesService from '@/api/galleriesService';
import Help from '@/api/helpService';
import Artist from '@/api/artistsService';
import {
  DashboardAnalytics,
  Data,
  ConversationItem,
  ArtistItem,
  GallerySystemArtist,
  SingleArtistData,
  SingleArtworkData,
  ArtworksRecord,
  SortOrder,
} from '@/dataTypes/types';

import { defineStore } from 'pinia';

type PutParams = {
  email?: string;
  link?: string;
  description?: string;
};

type searchParams = {
  keyword?: string;
  limit?: number;
  offset?: number;
};

export const useGalleryStore = defineStore({
  id: 'gallery',
  state: () => ({
    galleryInfo: {} as Data,
    galleryAnalytics: {} as DashboardAnalytics,
    conversations: [] as ConversationItem[],
    galleryAllArtists: [] as GallerySystemArtist[],
    messageConversation: {},
    message: {},
    myArtists: [] as ArtistItem[],
    artist: {} as SingleArtistData,
    artwork: {} as SingleArtworkData,
    galleryArtworks: [] as ArtworksRecord[],
    galleryArtworksLength: [] as ArtworksRecord[],
  }),
  getters: {},
  actions: {
    async getInfo() {
      const data = await GalleriesService.getInfo();
      this.galleryInfo = data;
      this.galleryAnalytics =
        this.galleryInfo.gallery.dashboard_analytics || {};
      return data;
    },
    async getConversations() {
      const data = await GalleriesService.getConversations();
      this.conversations = data.items;
      return data.items;
    },
    async fetchMessageConversation(id: number) {
      const data = await GalleriesService.getMessageConversation(id);
      this.messageConversation = data;
      return data;
    },
    async sendMessageToConversation(id: number, data: any) {
      return await GalleriesService.sendMessageToConversation(id, data);
    },
    async sendHelpMessage(type: string, data: string) {
      try {
        if (type === 'gallery') {
          await Help.sendMessage('galleries', data);
        } else if (type === 'artist') {
          await Help.sendMessage('artists', data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async updateInfo(data: PutParams) {
      const response = await GalleriesService.updateInfo(data);
      this.getInfo();
      return response;
    },
    async getAllArtists(data: searchParams) {
      const response = await GalleriesService.getAllSystemArtists(data);
      this.galleryAllArtists = response.items;
      return response.items;
    },
    async fetchMyArtists() {
      const artists = await Artist.getMyArtists();
      this.myArtists = artists;
      return artists;
    },
    async fetchArtist(id: number) {
      const artist = await Artist.getArtist(id);
      this.artist = artist.data;
      return artist.data;
    },
    async getArtwork(id: number) {
      const artwork = await GalleriesService.getArtwork(id);
      this.artwork = artwork;
      return artwork;
    },
    async createArtist(artist: any) {
      const response = await GalleriesService.createArtist(artist);
      this.fetchMyArtists();
      return response;
    },
    async updateArtist(id: number, artist: any) {
      const response = await GalleriesService.updateArtist(id, artist);
      this.fetchMyArtists();
      return response;
    },
    async getMyArtworks(keyword = '', limit = 1000, offset = 0) {
      const data = await GalleriesService.getMyArtworks(keyword, limit, offset);
      this.galleryArtworks = data.items;
      return data.items;
    },
    async getMyArtworksLength(keyword = '', limit = 10000, offset = 0) {
      const data = await GalleriesService.getMyArtworks(keyword, limit, offset);
      this.galleryArtworksLength = data.items;
      return data.items;
    },
    async updateArtwork(id: number, artwork: any) {
      const response = await GalleriesService.updateArtwork(id, artwork);
      this.galleryArtworks.filter((artwork) => artwork.id === id);
      this.getMyArtworks();
      return response;
    },
    async createArtwork(artwork: any) {
      const response = await GalleriesService.createArtwork(artwork);
      this.getMyArtworks();
      return response;
    },
    async deleteArtwork(type: string, id: number) {
      const response = await GalleriesService.deleteArtwork(type, id);
      return response;
    },
    async saveOrderOfArtwork(sortOrder: SortOrder) {
      const response = await GalleriesService.saveArtworkOrder(sortOrder);
      return response;
    },
    async saveOrderOfArtists(sortOrder: SortOrder) {
      const response = await GalleriesService.saveArtistsOrder(sortOrder);
      return response;
    },
    async saveOrderOfShows(sortOrder: SortOrder) {
      const response = await GalleriesService.saveShowsOrder(sortOrder);
      return response;
    },
    async addAttachment(data: any) {
      const response = await GalleriesService.addAttachment(data);
      return response;
    },
    async getAttachments(data: any) {
      const response = await GalleriesService.getAttachments(data);
      return response;
    },
    async deleteAttachment(id: number, data: any) {
      const response = await GalleriesService.deleteAttachment(id, data);
      return response;
    },
    clearState() {
      this.galleryInfo = {} as Data;
      this.galleryAnalytics = {} as DashboardAnalytics;
      this.conversations = [] as ConversationItem[];
      this.galleryAllArtists = [] as GallerySystemArtist[];
      this.messageConversation = {};
      this.message = {};
      this.myArtists = [] as ArtistItem[];
      this.artist = {} as SingleArtistData;
      this.artwork = {} as SingleArtworkData;
      this.galleryArtworks = [] as ArtworksRecord[];
      this.galleryArtworksLength = [] as ArtworksRecord[];
    },
  },
});
