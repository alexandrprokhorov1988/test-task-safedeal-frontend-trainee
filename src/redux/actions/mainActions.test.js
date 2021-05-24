import {SET_IS_OPEN_POPUP, setIsOpenPopup} from '../../redux/actions/mainActions';

describe("mainAction action", () => {
  it("setIsOpenPopup() should be create an action to set isOpenPopup", () => {
    const expectedAction = {
      type: SET_IS_OPEN_POPUP,
      payload: true
    };
    expect(setIsOpenPopup(true)).toEqual(expectedAction);
  });
});
