/* eslint-disable import/named */
import React from 'react';
import ReactDOM from 'react-dom';
import { mock } from 'jest';
import { screen } from './utils/test-utils';
import index, { renderToDOM } from './index';

describe('test ReactDOM.render', () => {
  const originalRender = ReactDOM.render;
  //   const originalGetElement = global.document.getElementById;
  beforeEach(() => {
    // global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });
  afterAll(() => {
    // global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
  });
  it('should call ReactDOM.render', () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
