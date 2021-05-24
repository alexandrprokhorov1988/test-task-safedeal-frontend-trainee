import { SET_IS_OPEN_POPUP} from "../actions/mainActions";

export const initialState = {
  isOpenPopup: false,
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_OPEN_POPUP:
      return { ...state, isOpenPopup: action.payload };
    default:
      return state;
  }
}
