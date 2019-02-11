import { ENV_API_URL, TOKEN } from '../constants/env-api.constants';
import { axios } from 'axios';

let instance = null;

class AuthSerice {

  constructor() {
    if(!instance) {
      instance = this;
    }
    this.url = `${ENV_API_URL}/auth`;
    return instance;
  }

  async signIn() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({message: "got in timeout"})
      }, 2000);
    });

    return await promise;
  }

  async signOut() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({message: "got in timeout"})
      }, 2000);
    });

    return await promise;
  }

}

export default new AuthSerice();
