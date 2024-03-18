import { FormData, SortOrder } from '@/dataTypes/types';
import API from './api';

class ArtistsService extends API {
  static async getInfo() {
    const response = await API.get('/artists/info');
    return response.data;
  }

  static async getMyArtists(keyword?: string, limit?: number, offset?: number) {
    const params = { keyword, limit, offset };
    const response = await API.get('/galleries/artists/mine', params);
    return response.data.items;
  }

  static async getArtist(id: number) {
    const response = await API.get(`/galleries/artists/${id}`);
    return response;
  }

  async createArtist(artist: any) {
    return await API.post('/artists', artist);
  }

  static async updateArtist(id: number, artist: FormData) {
    return await API.put(`/artists/info${id}`, artist);
  }

  static async updateArtistInfo(data: any) {
    return await API.put('/artists/info', data);
  }

  static async deleteArtist(id: number) {
    return await API.delete(`/galleries/artists/${id}`);
  }

  static async fetchArtistArtworks(
    keyword?: string,
    limit?: number,
    offset?: number
  ) {
    const params = { keyword, limit, offset };
    const response = await API.get('/artists/artworks', params);
    return { items: response.data.items, total: response.data.total };
  }

  static async createArtwork(artwork: any) {
    return await API.post('/artists/artworks/', artwork);
  }

  static async fetchArtistArtwork(id: number) {
    const response = await API.get(`/artists/artworks/${id}`);
    return response.data;
  }

  static async updateArtwork(id: number, artwork: any) {
    // continue update process
    return await API.put(`/artists/artworks/${id}`, artwork);
  }

  static async addArtistToGallery(id: number) {
    return await API.post(`/galleries/artists/${id}`);
  }

  static async saveArtworkOrder(sortOrder: SortOrder) {
    return await API.post(`/artists/artworks/order_all`, {
      sort_order: sortOrder,
    });
  }
}

export default ArtistsService;
