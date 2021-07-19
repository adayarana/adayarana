import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Signup from './Signup';
import * as actions from '../../redux/actions/action.creators';

jest.mock('../../redux/actions/action.creators');

describe('Signup component', () => {
  describe('Given a Signup form', () => {
    describe('When is submitted', () => {
      test('then should receive email and password', () => {
        render(
          <Signup />
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
  describe('Given a Signup function', () => {
    describe('When receive email and password as arguments', () => {
      const signup = jest.fn();
      const data = {
        email: 'aday@skylab.es',
        password: '123456'
      };
      test('then should be invoked with the parameters', () => {
        render(
          <Signup />
        );

        jest.spyOn(actions, 'signup').mockReturnValueOnce({ type: 'SIGN_UP', action: data });
        signup.mockReturnValueOnce(data);
        signup(data);

        expect(signup).toHaveBeenCalledWith(data);
      });
    });
  });
});
