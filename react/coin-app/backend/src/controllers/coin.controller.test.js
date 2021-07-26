const axios = require('axios');
const {
  getApi,
  getAllTransactions,
  createTransaction,
  getById,
  updateTransaction,
  deleteTransaction
} = require('./coin.controller');
const Transaction = require('../models/transaction.model');

jest.mock('../models/transaction.model');
jest.mock('axios');

describe('Given a getApi function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          body: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };

        axios.get.mockResolvedValueOnce({
          eur: 0.22,
          eur_market_cap: 3333
        });

        await getApi(req, res);
      });
      test('Then call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        req = {
          body: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        axios.get.mockRejectedValueOnce('error');

        await getApi(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getAllTransactions function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          query: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        await getAllTransactions(req, res);
      });
      test('Then call Transaction.find', () => {
        expect(Transaction.find).toHaveBeenCalled();
      });
      test('Then call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        req = {
          query: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Transaction.find.mockRejectedValueOnce('error');
        await getAllTransactions(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a createTransaction function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          query: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        await createTransaction(req, res);
      });
      test('Then call Transaction.create', () => {
        expect(Transaction.create).toHaveBeenCalled();
      });
      test('Then call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        req = {
          query: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Transaction.create.mockRejectedValueOnce('error');
        await createTransaction(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getById function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          params: { id: null }
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        await getById(req, res);
      });
      test('Then call Transaction.findById', () => {
        expect(Transaction.findById).toHaveBeenCalled();
      });
      test('Then call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        req = {
          params: { id: null }
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Transaction.findById.mockRejectedValueOnce('error');
        await getById(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateTransaction function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          params: { id: null },
          body: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        await updateTransaction(req, res);
      });
      test('Then call Transaction.findByIdAndUpdate', () => {
        expect(Transaction.findByIdAndUpdate).toHaveBeenCalled();
      });
      test('Then call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        req = {
          params: { id: null },
          body: null
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Transaction.findByIdAndUpdate.mockRejectedValueOnce('error');
        await updateTransaction(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteTransaction function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          params: { id: null }
        };

        res = {
          status: jest.fn(),
          send: jest.fn()
        };
        await deleteTransaction(req, res);
      });
      test('Then call Transaction.findByIdAndDelete', () => {
        expect(Transaction.findByIdAndDelete).toHaveBeenCalled();
      });
      test('Then call res.status(204)', () => {
        expect(res.status).toHaveBeenCalledWith(204);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And there is an error', () => {
      beforeEach(async () => {
        req = {
          params: { id: null }
        };

        res = {
          status: jest.fn(),
          send: jest.fn()
        };
        Transaction.findByIdAndDelete.mockRejectedValueOnce('error');
        await deleteTransaction(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
