import actionsTypes from '../actions/actions.types';

export default function coinsReducer(coins = {}, action) {
  switch (action.type) {
    case actionsTypes.GET_API:
      return action.coins;

    default:
      return coins;
  }
}
