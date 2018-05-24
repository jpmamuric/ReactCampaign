import React, { Component } from 'react'

import './Modal.css';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {
  // shouldComponentUpdate(nextProps, nextState){
  //   const { show } = this.props;
  //   return nextProps.show !== show || nextProps.children !== this.props.children
  // }

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

export default Modal;
