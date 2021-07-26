import actionsTypes from '../actions/actions.types';
import tokenReducer from './token.reducer';

describe('Given a tokenReducer function', () => {
  describe('When is invoked', () => {
    const token = {};
    describe('And action.type is equal to GET_USER_TOKEN', () => {
      const action = {
        type: actionsTypes.GET_USER_TOKEN,
        token: {
          headers: {
            Authorization: 'Bearer 123456'
          }
        }
      };
      const result = tokenReducer(token, action);
      test('It should return action.token', () => {
        expect(result).toEqual(action.token);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = tokenReducer(token, action);
      test('It should return token', () => {
        expect(result).toEqual(token);
      });
    });
  });
});
