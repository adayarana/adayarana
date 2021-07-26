import actionsTypes from '../actions/actions.types';
import coinsReducer from './coins.reducer';

describe('Given a coinsReducer function', () => {
  describe('When is invoked', () => {
    const coins = {};
    describe('And actions.type is equal to GET_API', () => {
      const action = {
        type: actionsTypes.GET_API,
        coins: {
          eur: 0.22,
          eur_market_cap: 3333
        }
      };
      const result = coinsReducer(coins, action);
      test('It should return action.coins', () => {
        expect(result).toEqual(action.coins);
      });
    });
    describe('And actions.type is undefined', () => {
      const action = {};
      const result = coinsReducer(coins, action);
      test('It should return coins', () => {
        expect(result).toEqual(coins);
      });
    });
  });
});
