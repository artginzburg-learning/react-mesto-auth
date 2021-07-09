const COHORT_ID = 'cohort-24';
const TOKEN = '70313b07-c3c0-40aa-a296-04d0e6bc7885';

const api = {
  url: 'mesto.nomoreparties.co',
  protocol: 'https://',
  version: 'v1',
};

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _paths = {
    users: 'users/me',
    cards: 'cards',
  };

  _handleFetch = res => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

  _customFetch(target, method, body) {
    const options = {
      headers: this._headers,
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

  getUserInfo() {
    return this._customFetch(this._paths.users);
  }

  getInitialCards() {
    return this._customFetch(this._paths.cards);
  }

  editProfile = ({ name, about }) =>
    this._customFetch(this._paths.users, 'PATCH', {
      name,
      about,
    });

  addCard = (name, link) =>
    this._customFetch(this._paths.cards, 'POST', {
      name,
      link,
    });

  deleteCard = cardId => this._customFetch(`${this._paths.cards}/${cardId}`, 'DELETE');

  changeLikeCardStatus = (cardId, status) =>
    this._customFetch(`${this._paths.cards}/likes/${cardId}`, status ? 'PUT' : 'DELETE');

  updateAvatar = ({ avatar }) =>
    this._customFetch(`${this._paths.users}/avatar`, 'PATCH', {
      avatar,
    });
}

export default new Api({
  baseUrl: `${api.protocol}${api.url}/${api.version}/${COHORT_ID}`,
  headers: {
    authorization: TOKEN,
  },
});
