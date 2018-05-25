import React from 'react';

import './Posts.css';

const PostItem = ({ post: { title, content }}) => (
  <div className='post-item-container'>
    <div className='post-item'>
      <h2 className='post-item-title'>{title}</h2>
      <div className='post-item-content'>{content}</div>
    </div>
  </div>

)

export default PostItem;
