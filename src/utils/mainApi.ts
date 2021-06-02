import {BASE_URL} from "./config";

interface IMainApi {
  baseUrl: string;
  headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };
}

interface ISetNewComment {
  id: number;
  name: string;
  comment: string;
}

class MainApi {
  private readonly _baseurl: string;

  private readonly _headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };

  constructor({baseUrl, headers}: IMainApi) {
    this._baseurl = baseUrl;
    this._headers = headers;
  }

  public getInitialImages() {
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

  public getOriginalSizeImage(id: number) {
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

  public setNewComment({id, name, comment}: ISetNewComment) {
    return fetch(`${this._baseurl}/${id}/comments`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({name, comment})
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
