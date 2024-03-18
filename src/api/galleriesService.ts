import API from './api';
import { FormData, SortOrder } from '@/dataTypes/types';

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

type typeParam = {
  id?: number;
  type?: string;
};
class GalleriesService extends API {
  static async getInfo() {
    const response = await API.get('/galleries/info');
    return response.data;
  }

  static async getMyArtworks(
    keyword?: string,
    limit?: number,
    offset?: number
  ) {
    const params = { keyword, limit, offset };
    const response = await API.get('/galleries/artworks', params);
    return response.data;
  }

  static async getConversations() {
    const response = await API.get('/galleries/conversations');
    return response.data;
  }

  static async getMessageConversation(id: number) {
    const response = await API.get(`/galleries/conversations/${id}`);
    return response.data; //galleries/conversations/:id/send_message
  }

  static async sendMessageToConversation(id: number, data: any) {
    const response = await API.post(
      `galleries/conversations/${id}/send_message`,
      data
    );
    return response;
  }

  static async updateInfo(data: PutParams) {
    const response = await API.put('/galleries/info', data);
    return response.success;
  }

  static async getAllSystemArtists(data: searchParams) {
    const response = await API.get('/galleries/artists/system', data);
    return response.data;
  }

  static async getArtwork(id: number) {
    const response = await API.get(`/galleries/artworks/${id}`);
    return response.data;
  }

  static async updateArtist(id: number, artist: any) {
    return await API.put(`/galleries/artists/${id}`, artist);
  }

  static async createArtist(artist: any) {
    return await API.post('/galleries/artists/', artist);
  }

  static async updateArtwork(id: number, artwork: any) {
    return await API.put(`/galleries/artworks/${id}`, artwork);
  }

  static async createArtwork(artwork: any) {
    return await API.post('/galleries/artworks/', artwork);
  }

  static async deleteArtwork(type: string, id: number) {
    return await API.delete(`/${type}/artworks/${id}`);
  }

  static async saveArtworkOrder(sortOrder: SortOrder) {
    return await API.put(`/galleries/artworks/order`, {
      sort_order: sortOrder,
    });
  }

  static async saveArtistsOrder(sortOrder: SortOrder) {
    return await API.put(`/galleries/artists/order`, {
      sort_order: sortOrder,
    });
  }

  static async saveShowsOrder(sortOrder: SortOrder) {
    return await API.put(`/galleries/exhibitions/order`, {
      sort_order: sortOrder,
    });
  }

  static async addAttachment(data: any) {
    return await API.post(`/galleries/attachments`, data);
  }

  static async getAttachments(data: typeParam) {
    return await API.get(`/galleries/attachments`, data);
  }

  static async deleteAttachment(id: number, data?: any) {
    return await API.delete(`/galleries/attachments/${id}`, data);
  }
}

export default GalleriesService;
