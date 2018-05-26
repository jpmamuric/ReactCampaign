import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPosts } from '../../../redux/actions/post';
import PostItem from './PostItem';
import './Posts.css'

class PostList extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  renderList(list){
    if( list.length === 0) {
      return <div className='post-list-container'> No Posts...</div>
    }

    return list.map(item => <PostItem key={item._id} post={item}/> );
  }

  render(){
    const { list } = this.props;
    if(!list) {
      return <div>loading...</div>
    }
    return (
      <div className='post-list-container'>
        { this.renderList(list) }
      </div>
    )
  }
}
const mapStateToProps = ({ post}) => ({ list: post.list });

export default connect(mapStateToProps, { loadPosts })(PostList);
