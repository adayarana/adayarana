import actionsTypes from '../actions/actions.types';

export default function transactionsReducer(transactions = [], action) {
  switch (action.type) {
    case actionsTypes.GET_TRANSACTIONS:
      return action.transactions;

    default:
      return transactions;
  }
}
