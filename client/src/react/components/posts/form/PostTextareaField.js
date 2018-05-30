import React from 'react';

import './form.css';

const PostTextareaField = ({ input, meta: { error, touched }}) => (
  <div className='post-field-container'>
    <textarea type='text' {...input} className={touched && error ? 'post-edit-form-textarea post-field-err' : 'post-edit-form-textarea' }/>
    <div className='post-field-text-err'> { touched && error} </div>
  </div>
)

export default PostTextareaField;
