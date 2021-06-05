import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import photoGrid from "../../stores/photoGridStore";

describe('App component', () => {
  photoGrid.setCards(
    [
      {id: 1, url: '#/test1'},
      {id: 5, url: '#/test5'}
    ]
  );
  it('App snapshot', () => {
    const render = renderer
      .create(<App/>)
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
