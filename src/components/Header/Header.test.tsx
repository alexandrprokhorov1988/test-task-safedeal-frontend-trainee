import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import {act} from "react-dom/test-utils";
import Header from './Header';

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

describe('Header component', () => {
  it("Рендер Header с текстом Test APP", () => {
    act(() => {
      render(<Header/>, container);
    });
    expect(container.textContent).toBe("Test APP");
  });

  it('Рендер Header snapshot', () => {
    const tree = renderer
      .create(<Header/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
