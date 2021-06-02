import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import {act} from "react-dom/test-utils";
import PhotoGrid from './PhotoGrid';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('PhotoGrid component', () => {
  it('PhotoGrid snapshot', () => {
    const store = createStore(combineReducers({
      main: () => ({
        isOpenPopup: false,
      }),
      photoGrid: () => ({
        cards: [{
          id: 1,
          url: "#/testUrl_1",
        },
          {
            id: 2,
            url: "#/testUrl_2",
          }],
        isLoading: false,
        currentOriginSizeImage: {id: 5, url: '#/testUrl'},
        comments: [{id: 1, text: 'Тестовый коммент', date: '55.55.2055'}],
      }),
      popup: () => ({
        isLoadingComment: false,
      }),
    }));

    const result = renderer
      .create(<Provider store={store}><PhotoGrid onOpen={() => {
      }}/></Provider>)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
