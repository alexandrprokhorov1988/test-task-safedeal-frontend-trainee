import {initialState, mainReducer} from './main';
import {setIsOpenPopup} from "../actions/mainActions";

describe("main reducer", () => {
  it("SET_IS_OPEN_POPUP is success", () => {
    expect(mainReducer(initialState, setIsOpenPopup(true))).toEqual({
      ...initialState,
      isOpenPopup: true
    })
  });
  it("SET_IS_OPEN_POPUP is success", () => {
    expect(mainReducer(initialState, setIsOpenPopup(false))).toEqual({
      ...initialState,
      isOpenPopup: false
    })
  });
});
