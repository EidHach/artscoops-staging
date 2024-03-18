import API from './api';

class HelpService extends API {
  static async sendMessage(type: string, text: string) {
    const response = await API.post(`/${type}/help`, { text: text });
    return response.data;
  }
}

export default HelpService;
