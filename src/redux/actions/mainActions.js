export const SET_IS_OPEN_POPUP = 'SET_IS_OPEN_POPUP';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_IS_LOADING_COMMENT = 'SET_IS_LOADING_COMMENT';

export function setIsOpenPopup(isOpenBool) {
  return {
    type: SET_IS_OPEN_POPUP,
    payload: isOpenBool,
  }
}

export function setIsLoading(isLoadingBool) {
  return {
    type: SET_IS_LOADING,
    payload: isLoadingBool,
  }
}

export function setIsLoadingComment(isLoadingBool) {
  return {
    type: SET_IS_LOADING_COMMENT,
    payload: isLoadingBool,
  }
}
