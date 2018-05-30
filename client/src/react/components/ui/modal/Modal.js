import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './Modal.css';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {
  componentDidUpdate(nextProps){
    if(this.props.location.pathname === '/notes' && this.props.open) {
      this.props.close();
    }
  }

  render() {
    const { children, open, close } = this.props;

    return (
      <div className='modal-container'>
        <Backdrop open={open} close={close} />
        <div className={ open ? `modal modal-show` : `modal modal-hide`}>
          { children }
        </div>
      </div>
    )
  }
}

export default withRouter(Modal);
