import {SET_CARDS, SET_COMMENTS, SET_CURRENT_ORIGIN_SIZE_IMAGE} from "../actions/cardsActions";

export const initialState = {
  cards: [],
  currentOriginSizeImage: {},
  comments: [],
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: action.payload };
    case SET_CURRENT_ORIGIN_SIZE_IMAGE:
      return { ...state, currentOriginSizeImage: action.payload };
    case SET_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}
