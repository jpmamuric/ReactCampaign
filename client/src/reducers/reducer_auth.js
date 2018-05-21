import * as types from '../actions/types'

const initialState = {
  user: null,
  hasCredits: false
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case types.FETCH_USER:
      return { ...state, user: action.payload || false };
    case types.USER_HAS_CREDITS:
      return { ...state, hasCredits: true };
    default:
      return state;
  }
}
