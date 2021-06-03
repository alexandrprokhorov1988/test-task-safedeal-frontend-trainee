import React from 'react';
import renderer from 'react-test-renderer';
import PhotoGrid from './PhotoGrid';
import photoGrid from '../../store/photoGrid';

describe('PhotoGrid component', () => {
  photoGrid.setCards(
    [
      {id: 1, url: '#/test1'},
      {id: 5, url: '#/test5'}
    ]
  );

  it('PhotoGrid snapshot', () => {
    const result = renderer
      .create(<PhotoGrid onOpen={() => {
      }}/>)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
