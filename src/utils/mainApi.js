import {BASE_URL} from "./config";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseurl = baseUrl;
    this._headers = headers;
  }

  getInitialImages() {
    return fetch(`${this._baseurl}`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      });
  }

  getOriginalSizeImage(id) {
    return fetch(`${this._baseurl}/${id}`, {
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      });
  }

  setNewComment({ id, name, comment }) {
    return fetch(`${this._baseurl}/${id}/comments`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, comment })
    })
      .then((res) => {
        if (res.ok) {
          return Promise.resolve('ok');
        }
        return Promise.reject(res.json());
      });
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default mainApi
