import axios from 'axios';

import { BASE_URL, HEADERS } from '../../utils/config';

type IMainApi = {
  baseUrl: string;
  headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };
};

class PhotoGridService {
  private readonly baseurl: string;

  private readonly headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };

  constructor({ baseUrl, headers }: IMainApi) {
    this.baseurl = baseUrl;
    this.headers = headers;
  }

  getInitialImages(): Promise<{ data: { id: number, url: string }[] }> {
    return axios({
      method: 'get',
      url: `${this.baseurl}`,
      headers: this.headers,
    });
  }
}

const photoGridStoreService = new PhotoGridService({
  baseUrl: BASE_URL,
  headers: HEADERS,
});

export default photoGridStoreService;
