import axios      from 'axios';
import * as types from './types';

export const changeInputTitle = text => ({ type: types.INPUT_CHANGE_POST_TITLE, payload: text });
export const changeInputContent = text => ({ type: types.INPUT_CHANGE_POST_CONTENT, payload: text });
