import actionsTypes from '../actions/actions.types';

export default function coinsReducer(filteredCoins = {}, action) {
  switch (action.type) {
    case actionsTypes.GET_FILTERED_COINS:
      return action.filteredCoins;

    default:
      return filteredCoins;
  }
}
