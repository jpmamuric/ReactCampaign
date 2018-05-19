import axios from 'axios';
import * as types from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const userCredits = () => ({ type: types.USER_CREDITS });

export const authenticateUser = (history) => dispatch => {
  history.push('/dashboard');
};

// export const es6fetchUser = () => dispatch => {
//   axios.get('/api/current_user')
//     .then( res => dispatch({ type: types.FETCH_USER, payload: res.data }) )
//     .catch( err => return err );
// }
