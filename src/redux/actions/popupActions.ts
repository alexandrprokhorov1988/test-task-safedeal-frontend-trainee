export const SET_IS_LOADING_COMMENT = 'SET_IS_LOADING_COMMENT';

interface ISetIsLoadingComment {
  type: typeof SET_IS_LOADING_COMMENT;
  payload: boolean;
}

export type popupActions = ISetIsLoadingComment;

export function setIsLoadingComment(isLoadingBool: boolean): ISetIsLoadingComment {
  return {
    type: SET_IS_LOADING_COMMENT,
    payload: isLoadingBool,
  }
}
