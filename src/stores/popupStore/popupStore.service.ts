import axios from 'axios';

import { BASE_URL, HEADERS } from '../../utils/config';

type IMainApi = {
  baseUrl: string;
  headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };
};

class PopupService {
  private readonly baseurl: string;

  private readonly headers: {
    'Accept'?: string,
    'Content-Type'?: string,
  };

  constructor({ baseUrl, headers }: IMainApi) {
    this.baseurl = baseUrl;
    this.headers = headers;
  }

  getOriginalSizeImage(id: number): Promise<{ data: { id: number, url: string, comments: [] } }> {
    return axios({
      method: 'get',
      url: `${this.baseurl}/${id}`,
      headers: this.headers,
    });
  }

  setNewComment(id: number, name: string, comment: string): Promise<{}> {
    return axios({
      method: 'post',
      url: `${this.baseurl}/${id}/comments`,
      headers: this.headers,
      data: {
        name,
        comment,
      },
    });
  }
}

const popupStoreService = new PopupService({
  baseUrl: BASE_URL,
  headers: HEADERS,
});

export default popupStoreService;
