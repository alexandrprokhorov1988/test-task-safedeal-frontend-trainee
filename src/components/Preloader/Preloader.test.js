import React from 'react';
import {unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import Preloader from './Preloader';

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

it('Preloader component', () => {
  const render = renderer
    .create(<Preloader/>)
    .toJSON();
  expect(render).toMatchSnapshot();
});
