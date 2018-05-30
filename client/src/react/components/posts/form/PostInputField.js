import React from 'react';

import './form.css';

const PostInputField = ({ input, meta: { error, touched }}) => (
  <div className='post-field-container'>
    <input type="text" {...input} className={touched && error ? 'post-edit-form-input post-field-err' : 'post-edit-form-input' }/>
    <div className='post-field-text-err'> { touched && error} </div>
  </div>
)

export default PostInputField;
