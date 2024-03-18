import API from './api';

class ShowsService extends API {
  static async fetchGalleryShows(
    keyword?: string,
    limit?: number,
    offset?: number
  ) {
    const params = { keyword, limit, offset };
    const response = await API.get('/galleries/exhibitions', params);
    return { items: response.data.items, total: response.data.total };
  }

  static async DeleteShow(id: number) {
    return await API.delete(`/galleries/exhibitions/${id}`);
  }

  static async fetchGalleryShow(id: number) {
    const response = await API.get(`/galleries/exhibitions/${+id}`);
    return response.data;
  }

  static async UpdateExhibition(id: number, data: any) {
    return await API.put(`/galleries/exhibitions/${id}`, data);
  }

  static async CreateExhibition(data: any) {
    return await API.post(`/galleries/exhibitions`, data);
  }
}

export default ShowsService;
