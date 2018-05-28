import * as types from '../actions/types'

const initialState = {
  sidebar: false,
  modal: false
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return { ...state, sidebar: action.payload };
    case types.TOGGLE_MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};
