export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;

    this._authFormat = '';
  }

  _constructAuthorization() {
    this._headers = {
      ...this._headers,
      authorization: this._authFormat + localStorage.token,
    };
  }

  _handleFetch = (res) => (res.ok ? res.json() : Promise.reject(res.statusText));

  _customFetch(target, method, body) {
    const options = {
      headers: this._headers ?? {},
    };

    if (method && method !== 'GET') {
      options.method = method;
      if (method !== 'DELETE') {
        options.headers['Content-Type'] = 'application/json';
      }
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}/${target}`, options).then(this._handleFetch);
  }
}
