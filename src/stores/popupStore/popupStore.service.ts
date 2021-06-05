import axios from 'axios';
import {BASE_URL, HEADERS} from '../../utils/config';

type IMainApi = {
  baseUrl: string;
  headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };
}

class PopupService {

  private readonly _baseurl: string;

  private readonly _headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };

  constructor({baseUrl, headers}: IMainApi) {
    this._baseurl = baseUrl;
    this._headers = headers;
  }

  getOriginalSizeImage(id: number) {
    return axios.get(`${this._baseurl}/${id}`, {
      headers: this._headers,
    })
  }

  setNewComment(id: number, name: string, comment: string) {
    return axios.post(`${this._baseurl}/${id}/comments`, {
      headers: this._headers,
      name,
      comment
    })
  }
}

const popupStoreService = new PopupService({
  baseUrl: BASE_URL,
  headers: HEADERS
});

export default popupStoreService;
