import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import {act} from "react-dom/test-utils";
import Popup from './Popup';

let container = null;
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
      render(<Popup
        isOpenPopup
        onClose={onClose}
        isLoadingComment={false}
        onSubmitComment={onClose}
        comments={[{ text: "Крутая фотка", date: "03.01.2020", id: 153 }]}
        currentOriginSizeImage={{ id: 237, url: "https://picsum.photos/id/237/600/400" }}
      />, container);
    });
    const buttonClose = document.querySelector(".popup__close-button");
    act(() => {
      buttonClose.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Должна вызывать коллбэк функцию по click на кнопку submit', () => {
    const onSubmitComment = jest.fn();
    act(() => {
      render(<Popup
        isOpenPopup
        onClose={onSubmitComment}
        isLoadingComment={false}
        onSubmitComment={onSubmitComment}
        comments={[{ text: "Крутая фотка", date: "03.01.2020", id: 153 }]}
        currentOriginSizeImage={{ id: 237, url: "https://picsum.photos/id/237/600/400" }}
      />, container);
    });
    const buttonSubmit = document.querySelector(".popup__form-button");

    act(() => {
      buttonSubmit.dispatchEvent(new Event("submit", { bubbles: true }));
    });
    expect(onSubmitComment).toHaveBeenCalledTimes(1);
  });

  it('Popup snapshot', () => {
    const result = renderer
      .create(<Popup
        isOpenPopup
        onClose={()=>{}}
        isLoadingComment={false}
        onSubmitComment={()=>{}}
        comments={[{ text: "Крутая фотка", date: "03.01.2020", id: 153 }]}
        currentOriginSizeImage={{ id: 237, url: "https://picsum.photos/id/237/600/400" }}
      />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
