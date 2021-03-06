import Api from '../classes/Api';
import { apiDomain } from '../utils/constants';

const api = {
  url: new URL(`https://auth.${apiDomain}`),
  endpoints: {
    signup: 'signup',
    signin: 'signin',
    user: 'users/me',
  },
};

class Auth extends Api {
  constructor(options) {
    super(options);

    this._authFormat = 'Bearer ';
  }

  register(email, password) {
    return this._customFetch(api.endpoints.signup, 'POST', { password, email });
  }

  login(email, password) {
    return this._customFetch(api.endpoints.signin, 'POST', { password, email });
  }

  getUserInfo() {
    this._constructAuthorization();

    return this._customFetch(api.endpoints.user).then(res => res.data);
  }
}

export default new Auth({
  baseUrl: api.url.origin,
});
