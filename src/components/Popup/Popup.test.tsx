import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import Popup from './Popup';
import {Provider} from "react-redux";
import {act} from 'react-dom/test-utils';
import {combineReducers, createStore} from "redux";
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
  it('Должна вызывать коллбэк функцию по click на кнопку закрытия попапа', () => {
    const onClose = jest.fn();
    act(() => {
      render(<Provider store={store}><Popup onClose={onClose}/></Provider>, container);
    });
    const buttonClose = document.querySelector(".popup__close-button");
    act(() => {buttonClose?.dispatchEvent(new MouseEvent("click", {bubbles: true}))});
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // it('Должна вызывать коллбэк функцию по click на кнопку submit', () => {
  //   const onSubmitComment = jest.fn();
  //   act(() => {
  //     render(<Provider store={store}><Popup onClose={onSubmitComment}/></Provider>, container);
  //   });
  //   const buttonSubmit = document.querySelector(".popup__form-button");
  //   act(() => {buttonSubmit?.dispatchEvent(new Event("submit", {bubbles: true}))});
  //   expect(onSubmitComment).toHaveBeenCalledTimes(1);
  // });


  it('Popup snapshot', () => {
    const store = createStore(combineReducers({
      main: () => ({
        isOpenPopup: true,
      }),
      photoGrid: () => ({
        cards: [],
        isLoading: false,
        currentOriginSizeImage: {id: 5, url: '#/testUrl'},
        comments: [{id: 1, text: 'Тестовый коммент', date: '55.55.2055'}],
      }),
      popup:() => ({
        isLoadingComment: false,
      }),
    }));

    const result = renderer
      .create(<Provider store={store}><Popup onClose={() => {
      }}
      /></Provider>)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
