import { makeAutoObservable } from 'mobx';

import { autoSave } from '../../utils/helpers';
import photoGridStoreService from './photoGridStore.service';
import { NOT_FOUND_ERR } from '../../utils/constants';

class PhotoGridStore {
  public cards: any[] = [];

  public isLoading = false;

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'photoGridStore');
  }

  public setIsLoading(state: boolean): void {
    this.isLoading = state;
  }

  public setCards(arr: any[]): void {
    this.cards = arr;
  }

  public getInitialImages(): void {
    this.setIsLoading(true);
    photoGridStoreService.getInitialImages()
      .then((response) => {
        this.setCards(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(NOT_FOUND_ERR);
        } else {
          console.log(err.message);
        }
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }
}

export default new PhotoGridStore();
