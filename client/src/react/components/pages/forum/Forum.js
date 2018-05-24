import React from 'react';

import './Forum.css';
import PostForm from '../../posts/PostForm';
import PostList from '../../posts/PostList';

const Posts = () => (
  <div>
    <PostForm />
    <PostList />
  </div>
);

export default Posts;
