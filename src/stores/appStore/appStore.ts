import { makeAutoObservable } from 'mobx';

import { autoSave } from '../../utils/helpers';

class App {
  public isOpenPopup = false;

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'appStore');
  }

  setIsOpenPopup(state: boolean): void {
    this.isOpenPopup = state;
  }
}

export default new App();
