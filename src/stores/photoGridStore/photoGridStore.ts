import {makeAutoObservable} from "mobx";
import {autoSave} from "../../utils/helpers";
import photoGridStoreService from '../photoGridStore/photoGridStore.service';
import {NOT_FOUND_ERR} from "../../utils/constants";

class PhotoGridStore {
  public cards: any[] = [];

  public isLoading = false;

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'photoGridStore');
  }

  public setIsLoading(state: boolean) {
    this.isLoading = state;
  }

  public setCards(arr: any[]) {
    this.cards = arr;
  }

  public getInitialImages() {
    this.setIsLoading(true);
    return photoGridStoreService.getInitialImages()
      .then((response) => {
        this.setCards(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(NOT_FOUND_ERR)
        } else {
          console.log(err.message);
        }
      })
      .finally(() => {
        this.setIsLoading(false);
      })
  }
}

export default new PhotoGridStore();
