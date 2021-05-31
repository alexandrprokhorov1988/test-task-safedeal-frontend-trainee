export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_CARDS = 'SET_CARDS';
export const SET_CURRENT_ORIGIN_SIZE_IMAGE = 'SET_CURRENT_ORIGIN_SIZE_IMAGE';
export const SET_COMMENTS = 'SET_COMMENTS';

interface ISetCardsAction {
  type: typeof SET_CARDS;
  payload: any[];
}

interface ISetCommentsAction {
  type: typeof SET_COMMENTS;
  payload: any[];
}

interface ISetCurrentOriginSizeImageAction {
  type: typeof SET_CURRENT_ORIGIN_SIZE_IMAGE;
  payload: object;
}

interface ISetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  payload: boolean;
}

export type photoGridActions =
  ISetCardsAction
  | ISetCommentsAction
  | ISetCurrentOriginSizeImageAction
  | ISetIsLoadingAction;

export function setIsLoading(isLoadingBool: boolean): ISetIsLoadingAction {
  return {
    type: SET_IS_LOADING,
    payload: isLoadingBool,
  }
}

export function setCards(cardsArr: any[]): ISetCardsAction {
  return {
    type: SET_CARDS,
    payload: cardsArr,
  }
}

export function setOriginSizeImage(image: {}): ISetCurrentOriginSizeImageAction {
  return {
    type: SET_CURRENT_ORIGIN_SIZE_IMAGE,
    payload: image,
  }
}

export function setComments(commentsArr: any[]): ISetCommentsAction {
  return {
    type: SET_COMMENTS,
    payload: commentsArr,
  }
}
