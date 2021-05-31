import React from 'react';
import {unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import Popup from './Popup';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {initialState, popupReducer} from "../../redux/reducers/popup";
import {photoGridReducer} from "../../redux/reducers/photoGrid";
import {mainReducer, initialState as state2} from "../../redux/reducers/main";
import {setIsLoadingComment} from "../../redux/actions/popupActions";
import {setIsLoading} from "../../redux/actions/photoGridActions";
import {setIsOpenPopup} from "../../redux/actions/mainActions";
import {store} from '../../redux/store';

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Popup component', () => {
  // it('Должна вызывать коллбэк функцию по click на кнопку закрытия попапа', () => {
  //   const onClose = jest.fn();
  //   act(() => {
  //     render(<Popup onClose={onClose}/>, container);
  //   });
  //   const buttonClose = document.querySelector(".popup__close-button");
  //   act(() => {
  //     buttonClose?.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  //   });
  //   expect(onClose).toHaveBeenCalledTimes(1);
  // });

  // it('Должна вызывать коллбэк функцию по click на кнопку submit', () => {
  //   const onSubmitComment = jest.fn();
  //   act(() => {
  //     render(<Popup onClose={onSubmitComment}/>, container);
  //   });
  //   const buttonSubmit = document.querySelector(".popup__form-button");
  //   act(() => {
  //     buttonSubmit?.dispatchEvent(new Event("submit", {bubbles: true}));
  //   });
  //   expect(onSubmitComment).toHaveBeenCalledTimes(1);
  // });

  it('Popup snapshot', () => {

    const result = renderer
      .create(<Provider store={{isOpenPopup: true}}><Popup onClose={() => {
      }}
      /></Provider>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
