import * as types from '../actions/types';

const initialState = {
  item: null,
  list: [],
  title: '',
  content: '',
  err: '',
  editing: false
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
    case types.LOAD_POSTS:
      return {
        ...state,
        list: action.payload
      };
    case types.SUBMIT_POST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        title: '',
        content: '',
        err: ''
      };
    case types.SUBMIT_POST_FAIL:
      return {
        ...state,
        err: action.payload
      };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        item: action.payload
      };
    case types.DELETE_POST_FAIL:
      return {
        ...state,
        err: action.payload
      };
    case types.EDIT_POST:
      return {
        ...state,
        editing: action.payload
      };
    case types.EDIT_POST_SUCCESS:
      return {
        ...state,
        editing: false,
        err: ''
      }
    case types.EDIT_POST_FAIL:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
}
