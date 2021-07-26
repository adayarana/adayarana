/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Home from './Home';

jest.mock('../../redux/actions/action.creators');

describe('Home component', () => {
  test('should renders coins from an initial state', () => {
    render(<Home />),
    {
      initialState: {
        coins: {
          bitcoin: { eur: 30000 }
        }
      }
    };
    const coins = screen.getByTestId('home-container');
    expect(coins).toBeInTheDocument();
  });
  test('should renders coins table', () => {
    render(<Home />),
    {
      initialState: {
        coins: {
          bitcoin: { eur: 30000 }
        }
      }
    };
    const coins = screen.getByTestId('home-container__table');
    expect(coins).toBeInTheDocument();
  });
});
