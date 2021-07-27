import { combineReducers } from 'redux';
import coinsReducer from './coins.reducer';
import filteredCoinsReducer from './filtered.coins.reducer';
import transactionsReducer from './transactions.reducer';
import transactionReducer from './transaction.reducer';
import userReducer from './user.reducer';
import tokenReducer from './token.reducer';

export default combineReducers({
  coins: coinsReducer,
  filteredCoins: filteredCoinsReducer,
  transactions: transactionsReducer,
  transaction: transactionReducer,
  user: userReducer,
  token: tokenReducer
});
