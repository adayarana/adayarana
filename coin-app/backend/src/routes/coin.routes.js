const { Router } = require('express');
const {
  getApi,
  getAllTransactions,
  createTransaction,
  getById,
  updateTransaction,
  deleteTransaction
} = require('../controllers/coin.controller');

const routes = Router();

routes
  .route('/')
  .get(getApi);

routes
  .route('/portfolio')
  .get(getAllTransactions)
  .post(createTransaction);

routes
  .route('/portfolio/:id')
  .get(getById)
  .put(updateTransaction)
  .delete(deleteTransaction);

module.exports = routes;
