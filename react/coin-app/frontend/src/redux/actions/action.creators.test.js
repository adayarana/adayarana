import axios from 'axios';
import actionsTypes from './actions.types';
import {
  getApi,
  signup,
  login,
  logout,
  getUserToken,
  getAllTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} from './action.creators';

jest.mock('axios');

describe('Given a getApi function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();
    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.get.mockResolvedValueOnce({
          type: actionsTypes.GET_API,
          coins: {
            eur: 0.22,
            eur_market_cap: 3333
          }
        });

        await getApi()(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.get.mockRejectedValueOnce({
          type: actionsTypes.GET_API,
          coins: {}
        });

        Promise = {
          reject: jest.fn()
        };

        await getApi()(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a signup function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();
    const newUser = {
      email: 'aday@skylab.es',
      password: '123456'
    };
    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.post.mockResolvedValueOnce({
          type: actionsTypes.SIGN_UP,
          user: {
            email: 'aday@skylab.es',
            password: '123456'
          }
        });

        await signup(newUser)(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.post.mockRejectedValueOnce({
          type: actionsTypes.SIGN_UP,
          user: {}
        });

        await signup(newUser)(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a login function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();
    const newUser = {
      email: 'aday@skylab.es',
      password: '123456'
    };
    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.post.mockResolvedValueOnce({
          type: actionsTypes.LOG_IN,
          user: {
            email: 'aday@skylab.es',
            password: '123456'
          }
        });

        await login(newUser)(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.post.mockRejectedValueOnce({
          type: actionsTypes.LOG_IN,
          user: {}
        });

        await login(newUser)(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a logout function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();

    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.post.mockResolvedValueOnce({
          type: actionsTypes.LOG_OUT,
          user: {
            email: 'aday@skylab.es',
            password: '123456'
          }
        });

        await logout()(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.post.mockRejectedValueOnce({
          type: actionsTypes.LOG_OUT,
          user: {}
        });

        await logout()(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getUserToken function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();

    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.get.mockResolvedValueOnce({
          type: actionsTypes.LOG_OUT,
          token: 123456
        });

        await getUserToken()(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.get.mockRejectedValueOnce({
          type: actionsTypes.LOG_OUT,
          user: {}
        });

        await getUserToken()(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getAllTransactions function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();

    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.get.mockResolvedValueOnce({
          type: actionsTypes.GET_TRANSACTIONS,
          transactions: [{
            type: 'buy',
            coin: 'bitcoin',
            price: 10,
            quantity: 10,
            spent: 10
          }]
        });

        await getAllTransactions()(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.get.mockRejectedValueOnce({
          type: actionsTypes.GET_TRANSACTIONS,
          transactions: []
        });

        await getAllTransactions()(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a createTransaction function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();
    const newTransaction = {
      type: 'buy',
      coin: 'bitcoin',
      price: 10,
      quantity: 10,
      spent: 10
    };

    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.post.mockResolvedValueOnce({
          type: actionsTypes.POST_TRANSACTION,
          transaction: [{
            type: 'buy',
            coin: 'bitcoin',
            price: 10,
            quantity: 10,
            spent: 10
          }]
        });

        await createTransaction(newTransaction)(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.post.mockRejectedValueOnce({
          type: actionsTypes.POST_TRANSACTION,
          transaction: []
        });

        await createTransaction(newTransaction)(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getTransactionById function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();

    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.get.mockResolvedValueOnce({
          type: actionsTypes.GET_TRANSACTION_BY_ID,
          transaction: [{
            id: 1,
            type: 'buy',
            coin: 'bitcoin',
            price: 10,
            quantity: 10,
            spent: 10
          }]
        });

        await getTransactionById()(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.get.mockRejectedValueOnce({
          type: actionsTypes.GET_TRANSACTION_BY_ID,
          transaction: []
        });

        await getTransactionById()(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateTransaction function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();

    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.put.mockResolvedValueOnce({
          type: actionsTypes.UPDATE_TRANSACTION,
          transaction: [{
            id: 1,
            type: 'buy',
            coin: 'bitcoin',
            price: 10,
            quantity: 10,
            spent: 10
          }]
        });

        await updateTransaction()(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.put.mockRejectedValueOnce({
          type: actionsTypes.UPDATE_TRANSACTION,
          transaction: []
        });

        await updateTransaction()(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteTransaction function', () => {
  describe('When is invoked', () => {
    const dispatch = jest.fn();

    describe('And there is no error', () => {
      beforeEach(async () => {
        axios.delete.mockResolvedValueOnce({
          type: actionsTypes.DELETE_TRANSACTION,
          transaction: [{
            id: 1,
            type: 'buy',
            coin: 'bitcoin',
            price: 10,
            quantity: 10,
            spent: 10
          }]
        });

        await deleteTransaction()(dispatch);
      });
      test('Then should call dispatch', () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        axios.delete.mockRejectedValueOnce({
          type: actionsTypes.DELETE_TRANSACTION,
          transaction: []
        });

        await deleteTransaction()(dispatch);
      });
      test('Then call Promise.reject', () => {
        expect(Promise.reject).toHaveBeenCalled();
      });
    });
  });
});
