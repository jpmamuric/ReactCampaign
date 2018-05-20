import { combineReducers } from 'redux';

import { reducer as form } from  'redux-form';
import auth                from './reducer_auth';
import surveys             from './reducer_surveys';
import layout              from './reducer_layout';

const rootReducer = combineReducers({
  auth,
  surveys,
  layout,
  form
});

export default rootReducer;
