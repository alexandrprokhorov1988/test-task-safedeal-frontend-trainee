import {setCards, setComments, setIsLoading, setOriginSizeImage} from '../actions/photoGridActions';
import {initialState, photoGridReducer} from './photoGrid';

describe("photoGrid reducer", () => {
  it("SET_IS_LOADING is success", () => {
    expect(photoGridReducer(initialState, setIsLoading(true))).toEqual({
      ...initialState,
      isLoading: true
    })
  });

  it("SET_IS_LOADING is success", () => {
    expect(photoGridReducer(initialState, setIsLoading(false))).toEqual({
      ...initialState,
      isLoading: false
    })
  });

  it("SET_CARDS is success", () => {
    expect(photoGridReducer(initialState, setCards([{id: 1, url: "url1"}]))).toEqual({
      ...initialState,
      cards: [{id: 1, url: "url1"}]
    })
  });

  it("SET_COMMENTS is success", () => {
    expect(photoGridReducer(initialState, setComments([{text: "text1", date: "date1", id: 1}]))).toEqual({
      ...initialState,
      comments: [{text: "text1", date: "date1", id: 1}]
    })
  });

  it("SET_CURRENT_ORIGIN_SIZE_IMAGE is success", () => {
    expect(photoGridReducer(initialState, setOriginSizeImage({id: 1, url: "origin_url"}))).toEqual({
      ...initialState,
      currentOriginSizeImage: {id: 1, url: "origin_url"}
    })
  });
});
