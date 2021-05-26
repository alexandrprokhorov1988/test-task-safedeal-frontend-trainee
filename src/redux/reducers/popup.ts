import {popupActions, SET_IS_LOADING_COMMENT} from "../actions/popupActions";

interface IPopupReducer {
  isLoadingComment: boolean,
}

export const initialState: IPopupReducer = {
  isLoadingComment: false,
};

export function popupReducer(state = initialState, action: popupActions): IPopupReducer {
  switch (action.type) {
    case SET_IS_LOADING_COMMENT:
      return {...state, isLoadingComment: action.payload};
    default:
      return state;
  }
}
