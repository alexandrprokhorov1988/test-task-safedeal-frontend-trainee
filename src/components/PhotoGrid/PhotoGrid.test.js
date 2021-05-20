import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import renderer from 'react-test-renderer';
import {act} from "react-dom/test-utils";
import PhotoGrid from './PhotoGrid';

let container = null;
const fakeCards = [
  {
    id: 237,
    url: "https://picsum.photos/id/237/300/200",
  }
];

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
  it("Должен отрисовывать картинки c заданными аттрибутами", async () => {
    act(() => {
      render(<PhotoGrid cards={fakeCards} onImageClick={() => {
      }}/>, container);
    });
    const img = container.querySelector(".photo-grid-img");
    expect(img.getAttribute("src")).toEqual("https://picsum.photos/id/237/300/200");
    expect(img.getAttribute("alt")).toEqual("Картинка");
    expect(img.getAttribute("role")).toEqual("presentation");
    expect(img.getAttribute("tabIndex")).toEqual("0");
  });

  it('Проверка snapshot', () => {
    const render = renderer
      .create(<PhotoGrid cards={fakeCards} onImageClick={() => {
      }}/>)
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
