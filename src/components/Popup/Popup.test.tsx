import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { fireEvent, render as tlRender } from '@testing-library/react'

import Popup from './Popup';
import popup from '../../stores/popupStore';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Popup component', () => {
  it('Popup snapshot', () => {
    popup.setOriginSizeImage({ id: 1, url: '#/test1' });
    popup.setComments([{ text: 'text1', date: 'date1', id: 1 }]);
    const result = renderer
      .create(<Popup onClose={() => {
      }}
      />).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('Должна вызывать коллбэк функцию по click на кнопку закрытия попапа', () => {
    const onClose = jest.fn();
    act(() => {
      render(<Popup onClose={onClose} />, container);
    });
    const buttonClose = document.querySelector('[data-testid=close-button]');

    act(() => {
      buttonClose?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Должна вызывать коллбэк функцию по click на фон попапа', () => {
    const onClose = jest.fn();
    act(() => {
      render(<Popup onClose={onClose} />, container);
    });
    const buttonClose = document.querySelector('[data-testid=popup-background]');
    act(() => {
      buttonClose?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Должна вызывать коллбэк функцию по click на кнопку submit', () => {
    act(() => {
      render(<Popup onClose={() => {
      }}
      />, container);
    });
    const buttonSubmit = document.querySelector('[data-testid=submit-button]');
    act(() => {
      buttonSubmit?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
    expect(buttonSubmit!.textContent).toEqual('Добавление комментария');
    popup.setIsLoadingComment(false);
  });

  it('Должна записывать и удалять значение в input-name', () => {
    const result = tlRender(<Popup onClose={() => {
    }} />);
    const input = result.getByTestId('input-name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'testName' } });
    expect(input.value).toBe('testName');
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });

  it('Должна записывать и удалять значение в input-comment', () => {
    const result = tlRender(<Popup onClose={() => {
    }} />);
    const input = result.getByTestId('input-name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'testComment' } });
    expect(input.value).toBe('testComment');
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });
});
