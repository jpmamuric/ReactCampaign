import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Posts.css';
import like from '../../../assets/like.png';
import PostEditForm from './form/PostEditForm';
import Spinner from '../ui/spinner/Spinner';
import { getPost, deletePost, editingPost } from '../../../redux/actions/post';
import { toggleModal } from '../../../redux/actions/layout';

class PostEdit extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  closeAndGoBack(){
    this.props.toggleModal(false);
    this.props.history.goBack();
    this.props.editingPost(false);
  }

  onHandleEditSubmit = (e) => {
    e.preventDefault();
  }

  renderPost(){
    if(!this.props.post.item) {
      return <Spinner />
    }

    const { deletePost, history, editingPost, post } = this.props;
    const { editing, item, loading } = post;
    const { title, content, likes, _id } = item;

    let Form = (
      <div className='post-edit-box'>
        <div >
          <h1>{title}</h1>
          <div className='post-edit-like-box'>
            <img className='post-item-like' src={like} alt='like thumb'/>
            <span className='post-item-like-number'>{likes}</span>
          </div>

          <p className='post-edit-content'>{content}</p>
        </div>
        <div className='post-edit-btns'>
          <div>
            <button
              onClick={()=>this.closeAndGoBack()}
              className='post-edit-btn'>
              Back
            </button>
            <button
              className='post-edit-btn post-edit-btn-update'
              onClick={()=>editingPost(!editing)}>
            { !editing ? 'Edit' : 'Cancel' }
            </button>
          </div>

          <button
            className='post-edit-btn post-edit-btn-delete'
            onClick={()=>deletePost(_id, history)}>
            Delete
          </button>
        </div>

      </div>
    );

    if(loading) {
      Form = <Spinner />
    }


    if(editing) {
      Form = (
        <div>
          <PostEditForm post={item}/>
            <button
              className='post-edit-btn post-edit-btn-update'
              onClick={()=>editingPost(!editing)}>
            { !editing ? 'Edit' : 'Cancel' }
            </button>
        </div>
      );
    }

    return Form;
  }

  render(){
    if(!this.props.modal) {
      return <Redirect to='/notes'/>
    }

    return (
      <div className='post-edit-container'>
        { this.renderPost() }
      </div>
    )
  }
}

const mapStateToProps = ({ post, layout: { modal } }) => ({ post, modal });

export default connect(
  mapStateToProps,
  {
    getPost,
    toggleModal,
    editingPost,
    deletePost
  }
)(withRouter(PostEdit));
