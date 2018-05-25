import axios      from 'axios';
import * as types from './types';

export const changeInputTitle = text => ({ type: types.INPUT_CHANGE_POST_TITLE, payload: text });
export const changeInputContent = text => ({ type: types.INPUT_CHANGE_POST_CONTENT, payload: text });

export const submitPost = (title, content, id) => async dispatch => {
  function updatePost(item) {
    return item.trim().charAt(0).toUpperCase() + item.trim().slice(1);
  }

  try {
    let updatedTitle = updatePost(title);
    let updatedContent = updatePost(content)
    let formData = { title: updatedTitle , content: updatedContent };
    const res = await axios.post(`/api/posts/${id}`, formData );
    dispatch({ type: types.FETCH_USER , payload: res.data.updatedUser });
    dispatch({ type: types.SUBMIT_POST_SUCCESS });
  } catch(err) {
    dispatch({ type: types.SUBMIT_POST_FAIL, payload: err.response.data.message });
  }

}

export const fetchPosts = () => async dispatch => {
  try {
    axios.get('');
  }

  catch(err) {

  }
}
