import React , { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/post';

class PostForm extends Component {
  handleOnSubmit(e){
    e.preventDefault();
    const { title, content } = this.props;
    console.log(title, content);
  }

  render() {
    const { changeInputTitle, changeInputContent, title, content } = this.props;
    return (
      <form onSubmit={e=>this.handleOnSubmit(e)}>
        <input value={title} onChange={e=>changeInputTitle(e.target.value)}/>
        <input value={content} onChange={e=>changeInputContent(e.target.value)}/>
        <button type='submit'>Submite</button>
      </form>
    );
  }
}

const mapStateToProps = ({ post }) => {
  const { title, content } = post;
  return { title, content };
}

export default connect(mapStateToProps, actions)(PostForm);
