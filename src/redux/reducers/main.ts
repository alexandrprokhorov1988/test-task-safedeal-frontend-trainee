import {mainActions, SET_IS_OPEN_POPUP} from "../actions/mainActions";

interface IMainState {
  isOpenPopup: boolean,
}

export const initialState: IMainState = {
  isOpenPopup: false,
};

export function mainReducer(state = initialState, action: mainActions): IMainState {
  switch (action.type) {
    case SET_IS_OPEN_POPUP:
      return {...state, isOpenPopup: action.payload};
    default:
      return state;
  }
}
