import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Header from './Header';

jest.mock('../../redux/actions/action.creators');

describe('Header component', () => {
  test('should toggle nav-menu button', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navMenuButton = screen.getByTestId('nav-menu-button');
    expect(navMenuButton).toBeInTheDocument();

    fireEvent.click(navMenuButton);

    const navMenu = screen.getByTestId('nav-menu');
    expect(navMenu).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  });
});
