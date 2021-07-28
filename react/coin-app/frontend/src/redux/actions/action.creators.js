import axios from 'axios';
import actionsTypes from './actions.types';

export function getApi() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_COINGECKO_URL);
      dispatch({
        type: actionsTypes.GET_API,
        coins: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.GET_API,
        coins: {}
      });
      Promise.reject(error);
    }
  };
}

export function getFilteredCoins(newSearch) {
  return {
    type: actionsTypes.GET_FILTERED_COINS,
    filteredCoins: newSearch
  };
}

export function signup(newUser) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(process.env.REACT_APP_DDBB_SIGNUP_URL, newUser);
      dispatch({
        type: actionsTypes.SIGN_UP,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.SIGN_UP,
        user: {}
      });
      Promise.reject(error);
    }
  };
}

export function login(newUser) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(process.env.REACT_APP_DDBB_LOGIN_URL, newUser);
      dispatch({
        type: actionsTypes.LOG_IN,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.LOG_IN,
        user: {}
      });
      Promise.reject(error);
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(process.env.REACT_APP_DBB_LOGOUT_URL);
      dispatch({
        type: actionsTypes.LOG_OUT,
        data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.LOG_OUT,
        data: {}
      });
      Promise.reject(error);
    }
  };
}

export function getUserToken(token) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_DDBB_USERPROFILE_URL, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch({
        type: actionsTypes.GET_USER_TOKEN,
        token: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.GET_USER_TOKEN,
        token: {}
      });
      Promise.reject(error);
    }
  };
}

export function getAllTransactions(token) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_DDBB_PORTFOLIO_URL, token);
      dispatch({
        type: actionsTypes.GET_TRANSACTIONS,
        transactions: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.GET_TRANSACTIONS,
        transactions: []
      });
      Promise.reject(error);
    }
  };
}

export function createTransaction(newTransaction) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(process.env.REACT_APP_DDBB_PORTFOLIO_URL, newTransaction);
      dispatch({
        type: actionsTypes.POST_TRANSACTION,
        transaction: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.POST_TRANSACTION,
        transaction: []
      });
      Promise.reject(error);
    }
  };
}

export function getTransactionById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_DDBB_PORTFOLIO_URL}/${id}`);
      dispatch({
        type: actionsTypes.GET_TRANSACTION_BY_ID,
        transaction: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.GET_TRANSACTION_BY_ID,
        transaction: []
      });
      Promise.reject(error);
    }
  };
}

export function updateTransaction(id, newTransaction) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_DDBB_PORTFOLIO_URL}/${id}`, newTransaction);
      dispatch({
        type: actionsTypes.UPDATE_TRANSACTION,
        transaction: data
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.UPDATE_TRANSACTION,
        transaction: []
      });
      Promise.reject(error);
    }
  };
}

export function deleteTransaction(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`${process.env.REACT_APP_DDBB_PORTFOLIO_URL}/${id}`);
      dispatch({
        type: actionsTypes.DELETE_TRANSACTION,
        id
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.DELETE_TRANSACTION,
        transaction: []
      });
      Promise.reject(error);
    }
  };
}

export function deleteAllTransactions() {
  return async (dispatch) => {
    try {
      await axios.delete(process.env.REACT_APP_DDBB_PORTFOLIO_URL);
      dispatch({
        type: actionsTypes.DELETE_ALL_TRANSACTIONS,
        transaction: []
      });
    } catch (error) {
      dispatch({
        type: actionsTypes.DELETE_ALL_TRANSACTIONS,
        transaction: []
      });
      Promise.reject(error);
    }
  };
}
