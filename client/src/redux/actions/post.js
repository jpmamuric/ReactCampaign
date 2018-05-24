import axios      from 'axios';
import * as types from './types';

export const changeInputTitle = text => ({ type: types.INPUT_CHANGE_POST_TITLE, payload: text });
export const changeInputContent = text => ({ type: types.INPUT_CHANGE_POST_CONTENT, payload: text });

export const submitPost = (title, content) => dispatch => {
  try {

    let formData = { title , content };
    console.log(formData)
    dispatch({ type: types.SUBMIT_POST_SUCCESS , payload: formData });
  } catch(err) {
    dispatch({ type: types.SUBMIT_POST_FAIL, payload: err.message });
  }

}

export const fetchPosts = () => async dispatch => {
  try {
    axios.get('');
  }

  catch(err) {

  }
}
