import {
  photoGridActions,
  SET_CARDS,
  SET_COMMENTS,
  SET_CURRENT_ORIGIN_SIZE_IMAGE,
  SET_IS_LOADING
} from "../actions/photoGridActions";

interface IPhotoGridState {
  cards: any[];
  isLoading: boolean;
  currentOriginSizeImage: {
    id?: number,
    url?: string
  };
  comments: any[];
}

export const initialState: IPhotoGridState = {
  cards: [],
  isLoading: false,
  currentOriginSizeImage: {},
  comments: [],
};

export function photoGridReducer(state = initialState, action: photoGridActions): IPhotoGridState {
  switch (action.type) {
    case SET_CARDS:
      return {...state, cards: action.payload};
    case SET_CURRENT_ORIGIN_SIZE_IMAGE:
      return {...state, currentOriginSizeImage: action.payload};
    case SET_COMMENTS:
      return {...state, comments: action.payload};
    case SET_IS_LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
}
