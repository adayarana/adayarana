const { Router } = require('express');
const {
  getApi,
  getAllTransactions,
  createTransaction,
  getById,
  updateTransaction,
  deleteTransaction,
  deleteAllTransactions
} = require('../controllers/coin.controller');

const routes = Router();

routes
  .route('/')
  .get(getApi);

routes
  .route('/portfolio')
  .get(getAllTransactions)
  .post(createTransaction)
  .delete(deleteAllTransactions);

routes
  .route('/portfolio/:id')
  .get(getById)
  .put(updateTransaction)
  .delete(deleteTransaction);

module.exports = routes;
