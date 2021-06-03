import {makeAutoObservable} from "mobx";
import {autoSave} from "../utils/helpers";

class PhotoGrid {
  public cards: any[] = [];

  public isLoading = false;

  public originSizeImage: { id?: number, url?: string } = {};

  public comments: { id: number, text: string, date: string }[] = [];

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'photoGridStore')
  }

  public setCards(newCard: any[]) {
    this.cards = newCard;
  }

  public setIsLoading(state: boolean) {
    this.isLoading = state;
  }

  public setOriginSizeImage(img: { id?: number, url?: string }) {
    this.originSizeImage = img;
  }

  public setComments(comments: { id: number, text: string, date: string }[]) {
    this.comments = comments;
  }
}

export default new PhotoGrid();
