export const SET_IS_LOADING_COMMENT = 'SET_IS_LOADING_COMMENT';

export function setIsLoadingComment(isLoadingBool) {
  return {
    type: SET_IS_LOADING_COMMENT,
    payload: isLoadingBool,
  }
}

