import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('App snapshot', () => {
  const render = renderer
    .create(<App/>)
    .toJSON();
  expect(render).toMatchSnapshot();
});
