import {SET_IS_LOADING_COMMENT} from "../../redux/actions/popupActions";
import {initialState, popupReducer} from "../../redux/reducers/popup";

describe("popup reducer", () => {
  it("SET_IS_LOADING_COMMENT is success", () => {
    const action = {
      type: SET_IS_LOADING_COMMENT,
      payload: true
    };
    expect(popupReducer(initialState, action)).toEqual({
      ...initialState,
      isLoadingComment: action.payload
    })
  });
});
