import actionsTypes from '../actions/actions.types';

export default function tokenReducer(token = {}, action) {
  switch (action.type) {
    case actionsTypes.GET_USER_TOKEN:
      return action.token;

    default:
      return token;
  }
}
