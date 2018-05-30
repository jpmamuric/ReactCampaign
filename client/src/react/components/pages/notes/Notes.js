import React, { Component } from 'react';
import { Route } from 'react-router-dom' ;
import { connect } from 'react-redux';

import './Notes.css';
import PostForm from '../../posts/form/PostForm';
import PostList from '../../posts/PostList';
import Modal from '../../ui/modal/Modal';
import PostEdit from '../../posts/PostEdit';

import { toggleModal } from '../../../../redux/actions/layout';
import { editingPost } from  '../../../../redux/actions/post';

class Posts extends Component {
  closeAndGoBack(){
    this.props.toggleModal(false);
    this.props.editingPost(false);
    this.props.history.goBack();
  }

  render(){
    return (
      <div>
        <Modal open={this.props.modal} close={()=>this.closeAndGoBack()}>
            <Route path={this.props.match.url + '/:id'} exact component={PostEdit}/>
        </Modal>
        <PostForm />
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = ({ layout: { modal } }) => ({ modal });

export default connect(mapStateToProps,{ toggleModal, editingPost })(Posts);
