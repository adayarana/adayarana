import actionsTypes from '../actions/actions.types';
import userReducer from './user.reducer';

describe('Given a userReducer function', () => {
  describe('When is invoked', () => {
    const user = {};
    describe('And action.type is equal to SIGN_UP', () => {
      const action = {
        type: actionsTypes.SIGN_UP,
        user: {
          email: 'aday@skylab.es',
          password: '123456'
        }
      };
      const result = userReducer(user, action);
      test('It should return action.user', () => {
        expect(result).toEqual(action.user);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = userReducer(user, action);
      test('It should return user', () => {
        expect(result).toEqual(user);
      });
    });
  });
});

describe('Given a userReducer function', () => {
  describe('When is invoked', () => {
    const user = {};
    describe('And action.type is equal to LOG_IN', () => {
      const action = {
        type: actionsTypes.LOG_IN,
        user: {
          email: 'aday@skylab.es',
          password: '123456'
        }
      };
      const result = userReducer(user, action);
      test('It should return action.user', () => {
        expect(result).toEqual(action.user);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = userReducer(user, action);
      test('It should return user', () => {
        expect(result).toEqual(user);
      });
    });
  });
});

describe('Given a userReducer function', () => {
  describe('When is invoked', () => {
    const user = {};
    describe('And action.type is equal to LOG_OUT', () => {
      const action = {
        type: actionsTypes.LOG_OUT,
        data: {
          email: 'aday@skylab.es',
          password: '123456',
          token: 123456
        }
      };
      const result = userReducer(user, action);
      test('It should return action.user', () => {
        expect(result).toEqual(action.data);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = userReducer(user, action);
      test('It should return user', () => {
        expect(result).toEqual(user);
      });
    });
  });
});
