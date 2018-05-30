import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field , reduxForm } from 'redux-form';

import './form.css';
import validate from '../../../utils/validate_forms';
import PostInputField from './PostInputField';
import PostTextareaField from './PostTextareaField';

import { editingPost, editPostSubmit } from '../../../../redux/actions/post';

class PostEditForm extends Component {
  onEditSubmit = (values) => {
    const { post, history } = this.props
    this.props.editPostSubmit(post._id, values, history);
  }

  render(){
    return (
      <form
        className='post-edit-form-container'
        onSubmit={this.props.handleSubmit(this.onEditSubmit)}>
        <Field name='title'  component={PostInputField} />
        <Field name='content' component={PostTextareaField} />
        <button className='post-edit-btn-submit' type='submit'>Submit</button>
      </form>
    )
  }
}

const PostEditReduxForm = reduxForm({
  validate,
  form: 'postForm'
})(PostEditForm);

const mapStateToProps = ({ post: { item: { title, content } } }) => {
  return {
    initialValues: {
      title,
      content
    }
  }
}

export default connect(mapStateToProps, { editingPost, editPostSubmit })(withRouter(PostEditReduxForm));
