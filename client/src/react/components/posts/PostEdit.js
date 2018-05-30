import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Posts.css';
import PostEditForm from './form/PostEditForm';
import { getPost, deletePost, editingPost } from '../../../redux/actions/post';
import { toggleModal } from '../../../redux/actions/layout';

class PostEdit extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  closeAndGoBack(){
    this.props.toggleModal(false);
    this.props.history.goBack();
  }

  onHandleEditSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }

  renderPost(){
    if(!this.props.post.item) {
      return <div>Loading ... </div>
    }

    const { deletePost, history, editingPost, post } = this.props;
    const { editing, item } = post;
    const { title, content, likes, _id } = item;

    let Form = (
      <div >
        <h1>{title}</h1>
        <p className='post-edit-content'>{content}</p>
        <div>likes: {likes}</div>
      </div>
    );

    if(this.props.post.editing) {
      Form = <PostEditForm post={post.item}/>
    }

    return (
      <div className='post-edit-box'>
        { Form }
        <div className='post-edit-btns'>
          <button
            onClick={()=>this.closeAndGoBack()}
            className='post-edit-btn'>
            Cancel
          </button>
          <button
            className='post-edit-btn post-edit-btn-update'
            onClick={()=>editingPost(!this.props.post.editing)}>
          { !editing ? 'Edit' : 'Cancel Edit' }
          </button>
          <button
            className='post-edit-btn post-edit-btn-delete'
            onClick={()=>deletePost(_id, history)}>
            Delete
          </button>
        </div>

      </div>
    )
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

// shouldComponentUpdate(nextProps){
//   if(this.props.post.item._id === nextProps.post.item._id){
//     return false
//   }
//
//   return true;
// }
