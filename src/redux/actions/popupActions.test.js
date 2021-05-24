import {SET_IS_LOADING_COMMENT, setIsLoadingComment} from '../../redux/actions/popupActions';

describe("popupAction action", () => {
  it("setIsLoadingComment() should be create an action to set isLoadingComment", () => {
    const expectedAction = {
      type: SET_IS_LOADING_COMMENT,
      payload: true
    };
    expect(setIsLoadingComment(true)).toEqual(expectedAction);
  });
});
