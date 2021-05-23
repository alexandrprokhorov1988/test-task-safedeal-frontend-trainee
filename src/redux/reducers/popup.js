import {SET_IS_LOADING_COMMENT} from "../actions/popupActions";

export const initialState = {
  isLoadingComment: false,
};

export function popupReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING_COMMENT:
      return { ...state, isLoadingComment: action.payload };
    default:
      return state;
  }
}
