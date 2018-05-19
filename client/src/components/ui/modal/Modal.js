import React, { Component } from 'react'

import './Modal.css';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState){
    const { show } = this.props;
    return nextProps.show !== show || nextProps.children !== this.props.children
  }

  render() {
    const { children, show, hide } = this.props;

    return (
      <div>
        <Backdrop show={show} hide={hide} />
        <div className={ show ? `modal modal-show` : `modal modal-hide`}>
          { children }
        </div>
      </div>
    )
  }
}

export default Modal;
