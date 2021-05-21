import {SET_IS_LOADING, SET_IS_LOADING_COMMENT, SET_IS_OPEN_POPUP} from "../actions/mainActions";

export const initialState = {
  isLoading: false,
  isLoadingComment: false,
  isOpenPopup: false,
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_OPEN_POPUP:
      return { ...state, isOpenPopup: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_IS_LOADING_COMMENT:
      return { ...state, isLoadingComment: action.payload };
    default:
      return state;
  }
}
