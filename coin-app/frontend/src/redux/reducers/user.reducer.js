import actionsTypes from '../actions/actions.types';

export default function userReducer(user = {}, action) {
  switch (action.type) {
    case actionsTypes.SIGN_UP:
      return action.user;

    case actionsTypes.LOG_IN:
      return action.user;

    case actionsTypes.LOG_OUT:
      return action.data;

    default:
      return user;
  }
}
