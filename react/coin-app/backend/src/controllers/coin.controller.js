const axios = require('axios');
const chalk = require('chalk');
const debug = require('debug')('server:coinController');
const Transaction = require('../models/transaction.model');

function controller() {
  const getApi = async (req, res) => {
    await axios.get(process.env.COINGECKO_URL)
      .then((response) => {
        res.json(response);
        debug(`${chalk.green(response)}`);
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
        debug(`${chalk.red(error)}`);
      });
  };

  const getAllTransactions = async (req, res) => {
    try {
      const transactions = await Transaction.find(req.query);
      res.json(transactions);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const createTransaction = async (req, res) => {
    try {
      const newTransaction = await Transaction.create(req.body);
      res.json(newTransaction);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const getById = async (req, res) => {
    const { id } = req.params;
    try {
      const coin = await Transaction.findById(id);
      res.json(coin);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const updateTransaction = async (req, res) => {
    const { id } = req.params;
    try {
      const transaction = await Transaction.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true, useFindAndModify: false }
      );
      res.json(transaction);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
      await Transaction.findByIdAndDelete(id);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteAllTransactions = async (req, res) => {
    try {
      await Transaction.deleteMany(req.query);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getApi,
    getAllTransactions,
    createTransaction,
    getById,
    updateTransaction,
    deleteTransaction,
    deleteAllTransactions
  };
}

module.exports = controller();
