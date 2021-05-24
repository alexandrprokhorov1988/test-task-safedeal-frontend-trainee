import {
  SET_CARDS,
  SET_COMMENTS,
  SET_CURRENT_ORIGIN_SIZE_IMAGE,
  SET_IS_LOADING,
  setCards,
  setComments,
  setIsLoading,
  setOriginSizeImage
} from '../../redux/actions/photoGridActions';

describe("photoGridAction action", () => {
  it("setIsLoading() should be create an action to set isLoading", () => {
    const expectedAction = {
      type: SET_IS_LOADING,
      payload: true
    };
    expect(setIsLoading(true)).toEqual(expectedAction);
  });

  it("setCards() should be create an action to set cards", () => {
    const expectedAction = {
      type: SET_CARDS,
      payload: [{ id: 237, url: "https://picsum.photos/id/237/300/200" }]
    };
    expect(setCards([{ id: 237, url: "https://picsum.photos/id/237/300/200" }])).toEqual(expectedAction);
  });

  it("setOriginSizeImage() should be create an action to set currentOriginSizeImage", () => {
    const expectedAction = {
      type: SET_CURRENT_ORIGIN_SIZE_IMAGE,
      payload: [{ id: 237, url: "https://picsum.photos/id/237/300/200" }]
    };
    expect(setOriginSizeImage([{ id: 237, url: "https://picsum.photos/id/237/300/200" }])).toEqual(expectedAction);
  });

  it("setComments() should be create an action to set comments", () => {
    const expectedAction = {
      type: SET_COMMENTS,
      payload: [{ text: "Крутая фотка", date: "03.01.2020", id: 153 }]
    };
    expect(setComments([{ text: "Крутая фотка", date: "03.01.2020", id: 153 }])).toEqual(expectedAction);
  });
});
