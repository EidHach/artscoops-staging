import API from './api';

class UserService extends API {
  // change type "any" to type of data you need to return from the api call.

  static async getInfo(type: string) {
    if (type === 'artist') {
      const response = await API.get('/artists/info');
      return response.data;
    } else if (type === 'gallery') {
      const response = await API.get('/galleries/info');
      return response.data;
    }
  }
}

export default UserService;
