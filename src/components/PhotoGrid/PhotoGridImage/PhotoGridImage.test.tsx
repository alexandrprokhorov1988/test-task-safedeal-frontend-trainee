import React from 'react';
import renderer from 'react-test-renderer';

import PhotoGridImage from './PhotoGridImage';

describe('Image component', () => {
  it('Image snapshot', () => {
    const result = renderer
      .create(<PhotoGridImage
        id={237}
        url="#"
        onOpen={() => {
        }}
      />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
