import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import {act} from "react-dom/test-utils";
import Image from './Image';
import handleGetOriginalSizeImage from '../../components/App/App';

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

describe('Image component', () => {
  it('Должна вызывать коллбэк функцию по click', () => {
    const onChange = jest.fn();
    act(() => {
      render(<Image id={237} url={'#'} onImageClick={onChange}/>, container);
    });
    const image = document.querySelector(".photo-grid-img");
    act(() => {
      image.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Должна вызывать коллбэк функцию по enter', () => {
    const onChange = jest.fn();
    act(() => {
      render(<Image id={237} url={'#'} onImageClick={onChange}/>, container);
    });
    const image = document.querySelector(".photo-grid-img");
    act(() => {
      image.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: 'Enter' }));
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Image snapshot', () => {
    const render = renderer
      .create(<Image id={237} url={'#'} onImageClick={handleGetOriginalSizeImage}/>)
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
