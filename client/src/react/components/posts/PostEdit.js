import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './Posts.css';
import { getPost } from '../../../redux/actions/post';
import { toggleModal } from '../../../redux/actions/layout';

class PostEdit extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  closeAndGoBack(){
    this.props.toggleModal(false);
    this.props.history.goBack();
  }

  renderPost(){
    if(!this.props.post.item) {
      return <div>Loading ... </div>
    }

    // use id for delete _id

    const { title, content, likes  } = this.props.post.item;

    return (
      <div className='post-edit-box'>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <div>likes: {likes}</div>
        </div>

        <div className='post-edit-btns'>
          <button
            onClick={()=>this.closeAndGoBack()}
            className='post-edit-btn'>
            Cancel
          </button>
          <button className='post-edit-btn post-edit-btn-update'>Edit</button>
          <button className='post-edit-btn post-edit-btn-delete'>Delete</button>
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

export default connect(mapStateToProps, { getPost, toggleModal })(PostEdit);

// shouldComponentUpdate(nextProps){
//   if(this.props.post.item._id === nextProps.post.item._id){
//     return false
//   }
//
//   return true;
// }
