import React from 'react';

import './form.css';

const PostInputField = ({ input, label,  meta: { error, touched }}) => (
  <div className='post-field-container'>
    <label htmlFor="" className='post-field-label'>{label}</label>
    <input type="text" {...input} className={touched && error ? 'post-edit-form-input post-field-err' : 'post-edit-form-input' }/>
    <div className='post-field-text-err'> { touched && error} </div>
  </div>
)

export default PostInputField;
