import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import Popup from './Popup';
import {act} from 'react-dom/test-utils';
import photoGrid from "../../store/photoGrid";
import popup from '../../store/popup';

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
      render(<Popup onClose={onClose}/>, container);
    });
    const buttonClose = document.querySelector(".popup__close-button");
    act(() => {
      buttonClose?.dispatchEvent(new MouseEvent("click", {bubbles: true}))
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Должна вызывать коллбэк функцию по click на кнопку submit', () => {
    act(() => {
      render(<Popup onClose={() => {
      }}/>, container);
    });
    const buttonSubmit = document.querySelector(".popup__form-button");
    act(() => {
      buttonSubmit?.dispatchEvent(new Event("submit", {bubbles: true, cancelable: true}))
    });
    expect(buttonSubmit!.textContent).toEqual('Добавление комментария');
    popup.setIsLoadingComment(false);
  });

  it('Popup snapshot', () => {
    photoGrid.setOriginSizeImage({id: 1, url: '#/test1'});
    photoGrid.setComments([{text: "text1", date: "date1", id: 1}]);
    const result = renderer
      .create(<Popup onClose={() => {
      }}/>).toJSON();
    expect(result).toMatchSnapshot();
  });
});
