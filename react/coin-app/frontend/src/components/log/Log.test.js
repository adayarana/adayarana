import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Log from './Log';
import * as actions from '../../redux/actions/action.creators';

jest.mock('../../redux/actions/action.creators');

describe('Log component', () => {
  describe('Given a login form', () => {
    describe('When is submitted', () => {
      test('then should receive email and password', () => {
        render(
          <Log />
        );

        const email = screen.getByTestId('email');
        const password = screen.getByTestId('password');
        fireEvent.change(email, { target: { value: 'aday@skylab.es' } });
        fireEvent.change(password, { target: { value: '123456' } });
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
      });
    });
  });
  describe('Given a login function', () => {
    describe('When receive email and password as arguments', () => {
      const login = jest.fn();
      const data = {
        email: 'aday@skylab.es',
        password: '123456'
      };
      test('then should be invoked with the parameters', () => {
        render(
          <Log />
        );

        jest.spyOn(actions, 'login').mockReturnValueOnce({ type: 'LOG_IN', action: data });
        login.mockReturnValueOnce(data);
        login(data);

        expect(login).toHaveBeenCalledWith(data);
      });
    });
  });
});
