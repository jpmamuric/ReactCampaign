import React from 'react';

const PostItem = ({ post: { title, content }}) => (
  <div>
    <div>{title}</div>
    <div>{content}</div>
  </div>
)

export default PostItem;
