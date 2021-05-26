import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import Preloader from './Preloader';
import {act} from "react-dom/test-utils";

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

describe('Preloader component', () => {
  it("Рендер Preloader с текстом", () => {
    act(() => {
      render(<Preloader/>, container);
    });
    expect(container.textContent).toBe("Идет поиск фотографий...");
  });

  it('Preloader component', () => {
    const render = renderer
      .create(<Preloader/>)
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
