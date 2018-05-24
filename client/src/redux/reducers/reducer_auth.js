import * as types from '../actions/types'

const initialState = {
  user: null
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case types.FETCH_USER:
      return { ...state, user: action.payload || false };
    case types.USER_SKIP_CREDITS:
      return {
        ...state,
        user: {
          ...state.user,
          credits: state.user.credits + 1,
          skipped: true
        }
      };
    default:
      return state;
  }
}
