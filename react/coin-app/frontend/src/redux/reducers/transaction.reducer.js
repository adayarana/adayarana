import actionsTypes from '../actions/actions.types';

export default function transactionsReducer(transaction = [], action) {
  switch (action.type) {
    case actionsTypes.GET_TRANSACTION_BY_ID:
      return action.transaction;

    case actionsTypes.POST_TRANSACTION:
      return action.transaction;

    case actionsTypes.UPDATE_TRANSACTION:
      return action.transaction;

    case actionsTypes.DELETE_TRANSACTION:
      return action.id;

    case actionsTypes.DELETE_ALL_TRANSACTIONS:
      return action.transaction;

    default:
      return transaction;
  }
}
