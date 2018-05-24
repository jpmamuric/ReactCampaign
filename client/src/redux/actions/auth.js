import axios from 'axios';
import * as types from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const authenticateUser = history => dispatch => {
  history.push('/dashboard');
};

// export const deleteAccount = history => async dispatch => {
//   try {
//     const res = await axios.delete(`/api/delete_account`);
//     dispatch({ type: types.FETCH_USER, payload: res.data });
//     history.push('/');
//   } catch (err) {
//
//   }
//
// }

// export const es6fetchUser = () => dispatch => {
//   axios.get('/api/current_user')
//     .then( res => dispatch({ type: types.FETCH_USER, payload: res.data }) )
//     .catch( err => return err );
// }
