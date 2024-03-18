import API from './api';
import { UserRecord } from '@/dataTypes/types';
import Cookies from 'js-cookie';

class AuthService extends API {
  // edit methods to get the token from sign endpoint
  static async login(email: string, password: string) {
    const response = await API.post('/signin', {
      email,
      password,
    });
    if (typeof response !== 'undefined') {
      const user = response.data.user;
      this.setToken('artscoops_auth', user);
      return user;
    }
    return false;
  }

  static setToken(token: string, user: UserRecord) {
    const expiryDate = new Date(
      new Date().getTime() + 1000 * 60 * 60 * 24 * 365
    );
    Cookies.set(token, user.auth_token, { expires: expiryDate });
  }

  static getToken() {
    const cookie = Cookies.get('artscoops_auth');

    if (cookie) {
      return cookie;
    }
    return null;
  }

  static getUserInfo() {
    const response = API.get('/users');
    return response;
  }

  static resetPassword(email: string) {
    const queryParams = email;
    const response = API.get('/users/reset_password', { email: queryParams });
    return response;
  }
}

export default AuthService;
