import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { toggleModal } from '../../../redux/actions/layout';
import like from '../../../assets/like.png';
import './Posts.css';

const PostItem = ({ post: { _id, title, content }, toggleModal }) => (
  <div className='post-item-container'>
    <Link to={`/notes/${_id}`} className='post-item' onClick={()=>toggleModal(true)}>
      <h2 className='post-item-title'>{title}</h2>
      <div className='post-item-content'>{content}</div>
      <img className='post-item-like'src={like} alt='like thumb'/>
    </Link>
  </div>
)

export default connect(null, { toggleModal })(PostItem);
