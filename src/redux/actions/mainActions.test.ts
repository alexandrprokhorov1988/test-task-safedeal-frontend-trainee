import {SET_IS_OPEN_POPUP, setIsOpenPopup} from './mainActions';

describe("mainAction action", () => {
  it("setIsOpenPopup() should be create an action to set isOpenPopup true", () => {
    const expectedAction = {
      type: SET_IS_OPEN_POPUP,
      payload: true
    };
    expect(setIsOpenPopup(true)).toEqual(expectedAction);
  });
  it("setIsOpenPopup() should be create an action to set isOpenPopup false", () => {
    const expectedAction = {
      type: SET_IS_OPEN_POPUP,
      payload: false
    };
    expect(setIsOpenPopup(false)).toEqual(expectedAction);
  });
});
