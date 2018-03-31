import axios      from 'axios';
import * as types from './types';

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  dispatch({ type: types.FETCH_USER, payload: res.data });
  history.push('/dashboard');
}

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: types.FETCH_SURVEYS, payload: res.data });
}
