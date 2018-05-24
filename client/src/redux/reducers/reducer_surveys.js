import * as types from '../actions/types';

const initialState = {
  list: [],
  item: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SURVEYS:
      return {
        ...state,
        list: action.payload
      };
    case types.FETCH_SURVEY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
