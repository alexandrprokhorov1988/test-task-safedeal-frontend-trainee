import {makeAutoObservable} from "mobx";
import {autoSave} from "../../utils/helpers";
import photoGridService from '../photoGridStore/photoGrid.service';
import {NOT_FOUND_ERR} from "../../utils/constants";

class PhotoGrid {
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
    this.isLoading = true;
    return photoGridService.getInitialImages()
      .then((response) => {
        this.cards = response.data;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(NOT_FOUND_ERR)
        } else {
          console.log(err.message);
        }
      })
      .finally(() => {
        this.isLoading = false;
      })
  }
}

export default new PhotoGrid();
