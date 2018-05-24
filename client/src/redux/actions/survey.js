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

export const fetchSurvey = id => async dispatch => {
  const res = await axios.get(`/api/surveys/${id}`);
  dispatch({ type: types.FETCH_SURVEY, payload: res.data });
}

export const deleteSurvey = (id, history) => async dispatch => {
  try {
    const res = await axios.delete(`/api/surveys/${id}`);
      dispatch({ type: types.DELETE_SURVEY_SUCCESS });
      dispatch({ type: types.FETCH_SURVEYS, payload: res.data });
      history.push('/dashboard');
  } catch(err) {
      dispatch({ type: types.DELETE_SURVEY_FAIL, payload: err.message });
  }

}
