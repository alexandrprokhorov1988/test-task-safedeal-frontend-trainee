export const SET_IS_OPEN_POPUP = 'SET_IS_OPEN_POPUP';

interface ISetIsOpenPopup {
  type: typeof SET_IS_OPEN_POPUP,
  payload: boolean,
}

export type mainActions = ISetIsOpenPopup;

export function setIsOpenPopup(isOpenBool: boolean) {
  return {
    type: SET_IS_OPEN_POPUP,
    payload: isOpenBool,
  }
}
