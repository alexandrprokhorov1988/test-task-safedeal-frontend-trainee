import axios from 'axios';
import {BASE_URL, HEADERS} from '../../utils/config';

type IMainApi = {
  baseUrl: string;
  headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };
}

class PhotoGridService {

  private readonly _baseurl: string;

  private readonly _headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };

  constructor({baseUrl, headers}: IMainApi) {
    this._baseurl = baseUrl;
    this._headers = headers;
  }

  getInitialImages() {
    return axios.get(`${this._baseurl}`, {
      headers: this._headers
    })
  }
}

const photoGridService = new PhotoGridService({
  baseUrl: BASE_URL,
  headers: HEADERS
});

export default photoGridService;
