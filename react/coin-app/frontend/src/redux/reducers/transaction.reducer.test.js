import actionsTypes from '../actions/actions.types';
import transactionReducer from './transaction.reducer';

describe('Given a transactionReducer function', () => {
  describe('When is invoked', () => {
    const transaction = [];
    describe('And action.type is equal to GET_TRANSACTION_BY_ID', () => {
      const action = {
        type: actionsTypes.GET_TRANSACTION_BY_ID,
        transaction: [{
          id: 1,
          type: 'buy',
          coin: 'bitcoin',
          price: 10,
          quantity: 10,
          spent: 10
        }]
      };
      const result = transactionReducer(transaction, action);
      test('It should return action.transaction', () => {
        expect(result).toEqual(action.transaction);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = transactionReducer(transaction, action);
      test('It should return transaction', () => {
        expect(result).toEqual(transaction);
      });
    });
  });
});

describe('Given a transactionReducer function', () => {
  describe('When is invoked', () => {
    const transaction = [];

    describe('And action.type is equal to POST_TRANSACTION', () => {
      const action = {
        type: actionsTypes.POST_TRANSACTION,
        transaction: [{
          id: 1,
          type: 'buy',
          coin: 'bitcoin',
          price: 10,
          quantity: 10,
          spent: 10
        }]
      };
      const result = transactionReducer(transaction, action);
      test('It should return transaction', () => {
        expect(result).toEqual(action.transaction);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = transactionReducer(transaction, action);
      test('It should return transaction', () => {
        expect(result).toEqual(transaction);
      });
    });
  });
});

describe('Given a transactionReducer function', () => {
  describe('When is invoked', () => {
    const transaction = [];
    describe('And action.type is equal to UPDATE_TRANSACTION', () => {
      const action = {
        type: actionsTypes.UPDATE_TRANSACTION,
        transaction: [{
          id: 1,
          type: 'buy',
          coin: 'bitcoin',
          price: 10,
          quantity: 10,
          spent: 10
        }]
      };
      const result = transactionReducer(transaction, action);
      test('It should return action.transaction', () => {
        expect(result).toEqual(action.transaction);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = transactionReducer(transaction, action);
      test('It should return transaction', () => {
        expect(result).toEqual(transaction);
      });
    });
  });
});

describe('Given a transactionReducer function', () => {
  describe('When is invoked', () => {
    const transaction = [];
    describe('And action.type is equal to DELETE_TRANSACTION', () => {
      const action = {
        type: actionsTypes.DELETE_TRANSACTION,
        transaction: [{
          id: 1,
          type: 'buy',
          coin: 'bitcoin',
          price: 10,
          quantity: 10,
          spent: 10
        }]
      };
      const result = transactionReducer(transaction, action);
      test('It should return action._id', () => {
        expect(result).toEqual(action.transaction.id);
      });
    });
    describe('And action.type is undefined', () => {
      const action = {};
      const result = transactionReducer(transaction, action);
      test('It should return transaction', () => {
        expect(result).toEqual(transaction);
      });
    });
  });
});
