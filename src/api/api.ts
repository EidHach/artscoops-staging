import axios, { AxiosError } from 'axios';
import Auth from './authService';
import { BASE_URL } from '@/constants';
import { isObjEmpty } from '@/helpers/emptyObjectsChecker';

type Params = {
  email?: string;
  keyword?: string;
  limit?: number;
  offset?: number;
  id?: number;
};

class API {
  private static async request(
    method: string,
    url: string,
    data: any,
    params: Params = {}
  ) {
    try {
      const token = Auth.getToken();
      const headers: Record<string, string> = {
        Authorization: token || '',
      };

      if (data instanceof FormData) {
        headers['Content-Type'] = 'multipart/form-data';
      } else {
        headers['Content-Type'] = 'application/json';
      }

      const response = await axios({
        method,
        url: BASE_URL + url,
        data,
        params,
        headers,
      });

      return response.data;
    } catch (error) {
      API.handleRequestError(error as AxiosError);
    }
  }

  static async get(url: string, params?: Params) {
    return API.request('get', url, null, params);
  }

  static async post(url: string, data?: any) {
    return API.request('post', url, data);
  }

  static async put(url: string, data: any) {
    return API.request('put', url, data);
  }

  static async delete(url: string, data?: any) {
    if (isObjEmpty(data)) return API.request('delete', url, null);
    return API.request('delete', url, data);
  }

  static handleRequestError(error: AxiosError) {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data
        ? JSON.stringify((error.response.data as { error: string }).error)
        : 'Request failed';
      return `${status} - ${message}`;
    } else if (error.request) {
      return 'No response received';
    } else {
      return 'Request setup failed';
    }
  }
}

export default API;
