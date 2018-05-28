import React from 'react';
import { connect } from 'react-redux';

import './Notes.css';
import PostForm from '../../posts/PostForm';
import PostList from '../../posts/PostList';

const Posts = ({ modal, id }) => (
  <div>
    <PostForm />
    <PostList />
  </div>
);

const mapStateToProps = ({ layout, post }) => {
  const { modal } = layout;
  const { id } = post
  return { modal, id };
};

export default connect(mapStateToProps)(Posts);
