import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import {act} from "react-dom/test-utils";
import Footer from './Footer';

let container:any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Footer component', () => {
  it("Рендер footer с текстом", () => {
    act(() => {
      render(<Footer/>, container);
    });
    expect(container.textContent).toBe("© 2018-2019-2021");
  });

  it('Рендер footer snapshot', () => {
    const tree = renderer
      .create(<Footer/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
