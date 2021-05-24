import {
  SET_CARDS,
  SET_COMMENTS,
  SET_CURRENT_ORIGIN_SIZE_IMAGE,
  SET_IS_LOADING
} from "../../redux/actions/photoGridActions";
import {initialState, photoGridReducer} from "../../redux/reducers/photoGrid";

describe("photoGrid reducer", () => {
  it("SET_IS_LOADING is success", () => {
    const action = {
      type: SET_IS_LOADING,
      payload: true
    };
    expect(photoGridReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: action.payload
    })
  });

  it("SET_CARDS is success", () => {
    const action = {
      type: SET_CARDS,
      payload: [{ id: 237, url: "https://picsum.photos/id/237/300/200" }]
    };
    expect(photoGridReducer(initialState, action)).toEqual({
      ...initialState,
      cards: action.payload
    })
  });

  it("SET_COMMENTS is success", () => {
    const action = {
      type: SET_COMMENTS,
      payload: [{ text: "Крутая фотка", date: "03.01.2020", id: 153 }]
    };
    expect(photoGridReducer(initialState, action)).toEqual({
      ...initialState,
      comments: action.payload
    })
  });

  it("SET_CURRENT_ORIGIN_SIZE_IMAGE is success", () => {
    const action = {
      type: SET_CURRENT_ORIGIN_SIZE_IMAGE,
      payload: { id: 237, url: "https://picsum.photos/id/237/600/400" }
    };
    expect(photoGridReducer(initialState, action)).toEqual({
      ...initialState,
      currentOriginSizeImage: action.payload
    })
  });
});
