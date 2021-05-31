import {setIsLoadingComment} from "../actions/popupActions";
import {initialState, popupReducer} from "./popup";

describe("popup reducer", () => {
  it("SET_IS_LOADING_COMMENT is success", () => {
    expect(popupReducer(initialState, setIsLoadingComment(true))).toEqual({
      ...initialState,
      isLoadingComment: true
    });

    expect(popupReducer(initialState, setIsLoadingComment(false))).toEqual({
      ...initialState,
      isLoadingComment: false
    });
  });
});
