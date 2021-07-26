import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Footer from './Footer';

jest.mock('../../redux/actions/action.creators');

describe('Footer component', () => {
  test('should renders footer-container', () => {
    render(
      <Footer />
    );
    const footer = screen.getByTestId('footer-container');
    expect(footer).toBeInTheDocument();
  });
});
