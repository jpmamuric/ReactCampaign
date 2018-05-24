import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostItem from './PostItem';

class PostList extends Component {
  renderList(){
    if(this.props.list.length === 0) {
      return <div> No Posts...</div>
    }

    return this.props.list.map(item => <PostItem key={item.title} post={item}/> );
  }

  render(){
    return (
      <div>
        { this.renderList() }
      </div>
    )
  }
}
const mapStateToProps = ({ post }) => ({ list: post.list });

export default connect(mapStateToProps)(PostList);
