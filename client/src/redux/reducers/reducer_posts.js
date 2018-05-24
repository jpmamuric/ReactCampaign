import * as types from '../actions/types';

const initialState = {
  list: [],
  title: '',
  content: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE_POST_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case types.INPUT_CHANGE_POST_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
}
