import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import {act} from "react-dom/test-utils";
import PhotoGridImage from './PhotoGridImage';

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

describe('Image component', () => {
  it('Должна вызывать коллбэк функцию по click', () => {
    const onChange = jest.fn();
    act(() => {
      render(<PhotoGridImage id={237} url="#" onOpen={onChange}/>, container);
    });
    const image = document.querySelector("img");
    act(() => {
      image?.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Должна вызывать коллбэк функцию по enter', () => {
    const onChange = jest.fn();
    act(() => {
      render(<PhotoGridImage id={237} url="#" onOpen={onChange}/>, container);
    });
    const image = document.querySelector("img");
    act(() => {
      image?.dispatchEvent(new KeyboardEvent("keydown", {bubbles: true, key: 'Enter'}));
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Image snapshot', () => {
    const result = renderer
      .create(<PhotoGridImage id={237} url="#" onOpen={() => {
      }}/>)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
