import * as types from '../actions/types';

const initialState = {
  list: [],
  title: '',
  content: '',
  err: ''
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
    case types.SUBMIT_POST_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.payload),
        title: '',
        content: ''
      };
    case types.SUBMIT_POST_FAIL:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
}
