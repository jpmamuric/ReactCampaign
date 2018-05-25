import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostItem from './PostItem';
import './Posts.css'

class PostList extends Component {
  renderList(user){
    if( user.posts.length === 0) {
      return <div> No Posts...</div>
    }

    return user.posts.map(item => <PostItem key={item._id} post={item}/> );
  }

  render(){
    const { user } = this.props;
    if(!user) {
      return <div>loading...</div>
    }
    return (
      <div className='post-list-container'>
        { this.renderList(user) }
      </div>
    )
  }
}
const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps)(PostList);
