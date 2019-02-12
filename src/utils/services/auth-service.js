import { ENV_API_URL } from '../constants/env-api.constants';
import axios from 'axios';

let instance = null;

class AuthSerice {

  constructor() {
    if(!instance) {
      instance = this;
    }
    this.url = `${ENV_API_URL}/auth`;
    return instance;
  }

  async signIn(payload) {
    // const promise = new Promise((resolve, reject) => {
    //   console.log('before axios post ', axios)
    //   axios.post(`${this.url}/user`, payload)
    //     .then(res => resolve(res))
    //     .catch(err => reject(err));
    // });

    const signIn = await axios.post(`${this.url}/user`, payload);

    return signIn;
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
