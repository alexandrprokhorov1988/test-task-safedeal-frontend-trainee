import { makeAutoObservable } from 'mobx';

import { autoSave, dateParseFromTimestampToString } from '../../utils/helpers';
import popupStoreService from './popupStore.service';
import { NOT_FOUND_ERR } from '../../utils/constants';

class PopupStore {
  public isLoadingComment = false;

  public originSizeImage: { id?: number, url?: string } = {};

  public comments: { id: number, text: string, date: string }[] = [];

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'popupStore');
  }

  setIsLoadingComment(state: boolean): void {
    this.isLoadingComment = state;
  }

  public setOriginSizeImage(image: { id?: number, url?: string }): void {
    this.originSizeImage = image;
  }

  public setComments(comments: { id: number, text: string, date: string }[]): void {
    this.comments = comments;
  }

  public getOriginSizeImage(imgId: number, callBack: () => void): void {
    this.setOriginSizeImage({});
    popupStoreService.getOriginalSizeImage(imgId)
      .then((response) => {
        const { id, url, comments } = response.data;
        this.setOriginSizeImage({ id, url });
        const newComments = comments.map((comment: { text: string, date: number, id: number }) => ({
          text: comment.text,
          date: dateParseFromTimestampToString(comment.date),
          id: comment.id,
        }));
        this.setComments(newComments);
        callBack();
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(NOT_FOUND_ERR);
        } else {
          console.log(err.message);
        }
      });
  }

  public setNewComment(id: number, name: string, comment: string, callBack: () => void): void {
    this.setIsLoadingComment(true);
    popupStoreService.setNewComment(id, name, comment)
      .then(() => {
        const answerFromServer = {
          id: Math.random(),
          text: comment,
          date: dateParseFromTimestampToString(new Date().getTime()),
        };
        this.setComments([...this.comments, answerFromServer]);
        callBack();
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(NOT_FOUND_ERR);
        } else {
          console.log(err.message);
        }
      })
      .finally(() => {
        this.setIsLoadingComment(false);
      });
  }
}

export default new PopupStore();