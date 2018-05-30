import React , { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../redux/actions/post';
import './form.css';

class PostForm extends Component {
  handleOnSubmit = e => {
    e.preventDefault();
    const { title, content, submitPost, auth } = this.props;
    if(title.length > 25) {
      return null
    } else {
      submitPost( title, content, auth.user._id );
    }
  }

  render() {
    const { changeInputTitle, changeInputContent, title, content, err } = this.props;
    return (
      <div className='post-form-container'>
        <form onSubmit={this.handleOnSubmit} className='post-form'>
          <input
            value={title}
             onChange={e=>changeInputTitle(e.target.value)}
             required
             placeholder='Title'
             className='post-form-input'/>
          <textarea
             value={content}
             onChange={e=>changeInputContent(e.target.value)}
             required
             placeholder='Whats on your mind?'
             className='post-form-textarea'>
           </textarea>
          <button type='submit' className='post-form-btn-submit'>Submit</button>
          { err !== '' ? <div className='post-form-err'>{err}</div> : null }
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ post, auth }) => {
  const { title, content, err } = post;
  return { title, content, auth, err };
}

export default connect(mapStateToProps, actions)(PostForm);
