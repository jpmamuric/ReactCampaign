import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Posts.css';
import { getPost } from '../../../redux/actions/post';

class PostEdit extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
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
          <button className='post-edit-btn post-edit-btn-update'>Edit</button>
          <button className='post-edit-btn post-edit-btn-delete'>Delete</button>
        </div>

      </div>
    )
  }

  render(){
    return (
      <div className='post-edit-container'>
        { this.renderPost() }
        <Link to='/notes' className='post-edit-btn'>Back</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => ({ post });

export default connect(mapStateToProps, { getPost })(PostEdit);

// shouldComponentUpdate(nextProps){
//   if(this.props.post.item._id === nextProps.post.item._id){
//     return false
//   }
//
//   return true;
// }
