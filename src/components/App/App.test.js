import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

it('App snapshot', () => {
  const render = renderer
    .create(
      <Provider store={store}>
        <App/>
      </Provider>
    )
    .toJSON();
  expect(render).toMatchSnapshot();
});
