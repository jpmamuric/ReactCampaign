import axios      from 'axios';
import * as types from './types';

export const changeInputTitle = text => ({ type: types.INPUT_CHANGE_POST_TITLE, payload: text });
export const changeInputContent = text => ({ type: types.INPUT_CHANGE_POST_CONTENT, payload: text });

const fetchPosts = async () => {
  const res = await axios.get('/api/posts');
  return res.data;
}

export const loadPosts = () => async dispatch => {
  const posts = await fetchPosts();
  dispatch({ type: types.LOAD_POSTS, payload: posts });
}

export const submitPost = (title, content, id) => async dispatch => {
  function updatePost(item) {
    return item.trim().charAt(0).toUpperCase() + item.trim().slice(1);
  }

  try {
    let updatedTitle = updatePost(title);
    let updatedContent = updatePost(content)
    let formData = { title: updatedTitle , content: updatedContent };
    await axios.post(`/api/posts/${id}`, formData );
    const posts = await fetchPosts();
    dispatch({ type: types.SUBMIT_POST_SUCCESS, payload: posts });
  } catch(err) {
    dispatch({ type: types.SUBMIT_POST_FAIL, payload: err.response.data.message });
  }

}
