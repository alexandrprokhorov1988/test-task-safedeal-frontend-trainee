export const SET_IS_OPEN_POPUP = 'SET_IS_OPEN_POPUP';

export function setIsOpenPopup(isOpenBool) {
  return {
    type: SET_IS_OPEN_POPUP,
    payload: isOpenBool,
  }
}
