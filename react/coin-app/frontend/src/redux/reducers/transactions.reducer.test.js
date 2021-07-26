import actionsTypes from '../actions/actions.types';
import transactionsReducer from './transactions.reducer';

describe('Given a transactionsReducer function', () => {
  describe('When is invoked', () => {
    const transactions = [];
    describe('And action.type is equal to GET_TRANSACTIONS', () => {
      const action = {
        type: actionsTypes.GET_TRANSACTIONS,
        transactions: [{
          type: 'buy',
          coin: 'bitcoin',
          price: 10,
          quantity: 10,
          spent: 10
        }]
      };
      const result = transactionsReducer(transactions, action);
      test('It should return action.transactions', () => {
        expect(result).toEqual(action.transactions);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = transactionsReducer(transactions, action);
      test('It should return transactions', () => {
        expect(result).toEqual(transactions);
      });
    });
  });
});
