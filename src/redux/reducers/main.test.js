import {SET_IS_OPEN_POPUP} from "../../redux/actions/mainActions";
import {initialState, mainReducer} from "../../redux/reducers/main";

describe("popup reducer", () => {
  it("SET_IS_LOADING_COMMENT is success", () => {
    const action = {
      type: SET_IS_OPEN_POPUP,
      payload: true
    };
    expect(mainReducer(initialState, action)).toEqual({
      ...initialState,
      isOpenPopup: action.payload
    })
  });
});
