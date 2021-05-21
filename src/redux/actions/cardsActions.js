export const SET_CARDS = 'SET_CARDS';
export const SET_CURRENT_ORIGIN_SIZE_IMAGE = 'SET_CURRENT_ORIGIN_SIZE_IMAGE';
export const SET_COMMENTS = 'SET_COMMENTS';

export function setCards(cardsArr) {
  return {
    type: SET_CARDS,
    payload: cardsArr,
  }
}

export function setOriginSizeImage(image) {
  return {
    type: SET_CURRENT_ORIGIN_SIZE_IMAGE,
    payload: image,
  }
}

export function setComments(commentsArr) {
  return {
    type: SET_COMMENTS,
    payload: commentsArr,
  }
}
