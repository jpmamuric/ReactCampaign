import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import './Posts.css';

const PostItem = ({ post: { _id, title, content } }) => (
  <div className='post-item-container'>
    <Link to={`/notes/${_id}`} className='post-item'>
      <h2 className='post-item-title'>{title}</h2>
      <div className='post-item-content'>{content}</div>
    </Link>
  </div>
)

export default connect(null)(PostItem);
