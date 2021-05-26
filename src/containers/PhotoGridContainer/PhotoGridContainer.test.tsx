import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import PhotoGridContainer from './PhotoGridContainer';

describe('PhotoGridContainer container', () => {
  it('PhotoGridContainer container', () => {
    const renderResult = renderer
      .create(
        <Provider store={store}>
          <PhotoGridContainer/>
        </Provider>
      )
      .toJSON();
    expect(renderResult).toMatchSnapshot();
  });


});
