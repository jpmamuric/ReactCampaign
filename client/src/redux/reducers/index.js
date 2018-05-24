import { combineReducers } from 'redux';

import { reducer as form } from  'redux-form';
import auth                from './reducer_auth';
import surveys             from './reducer_surveys';
import layout              from './reducer_layout';
import post                from './reducer_posts';

const rootReducer = combineReducers({
  auth,
  surveys,
  post,
  layout,
  form
});

export default rootReducer;
