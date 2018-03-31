import * as types from '../actions/types'

const initialState = {
  user: null
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case types.FETCH_USER:
      return { ...state, user: action.payload || false };
    default:
      return state;
  }
}