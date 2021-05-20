import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import Footer from './Footer';


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


it("Рендер footer с текстом rureactjs", () => {
  act(() => {
    render(<Footer />, container);
  });
  expect(container.textContent).toBe("© 2018-2019-2021");
});


it('Рендер footer с текстом jestio', () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
