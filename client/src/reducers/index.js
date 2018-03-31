import { combineReducers } from 'redux';

import { reducer as form } from  'redux-form';
import auth                from './reducer_auth';
import surveys             from './reducer_surveys';

const rootReducer = combineReducers({
  auth,
  surveys,
  form
});

export default rootReducer;
