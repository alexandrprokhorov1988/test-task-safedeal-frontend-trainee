import {makeAutoObservable} from "mobx";

class Popup {
  public isLoadingComment = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoadingComment(state: boolean) {
    this.isLoadingComment = state;
  }
}

export default new Popup();
