import {BASE_URL} from "./config";

class MainApi {
  constructor({ baseUrl }) {
    this._baseurl = baseUrl;
  }

  getInitialImages() {
    return fetch(`${this._baseurl}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      });
  }

  setNewComment(id, name, comment) {
    return fetch(`${this._baseurl}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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

const mainApi = new MainApi({ baseUrl: BASE_URL });

export default mainApi
