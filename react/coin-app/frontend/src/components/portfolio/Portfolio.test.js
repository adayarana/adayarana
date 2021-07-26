import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Portfolio from './Portfolio';
import * as actions from '../../redux/actions/action.creators';

jest.mock('../../redux/actions/action.creators');

describe('Portfolio component', () => {
  describe('Given a Portfolio form', () => {
    describe('When is submitted', () => {
      test('then should receive coin and price', () => {
        render(
          <Portfolio />
        );

        const coin = screen.getByTestId('coin');
        const price = screen.getByTestId('price');
        fireEvent.change(coin, { target: { value: 'bitcoin' } });
        fireEvent.change(price, { target: { value: '10000' } });
        expect(coin).toBeInTheDocument();
        expect(price).toBeInTheDocument();
      });
    });
  });
  describe('Given a Portfolio function', () => {
    describe('When receive coin and price as arguments', () => {
      const portfolio = jest.fn();
      const data = {
        coin: 'aday@skylab.es',
        price: '123456'
      };
      test('then should be invoked with the parameters', () => {
        render(
          <Portfolio />
        );

        jest.spyOn(actions, 'createTransaction').mockReturnValueOnce({ type: 'POST_TRANSACTION', action: data });
        portfolio.mockReturnValueOnce(data);
        portfolio(data);

        expect(portfolio).toHaveBeenCalledWith(data);
      });
    });
  });
});
