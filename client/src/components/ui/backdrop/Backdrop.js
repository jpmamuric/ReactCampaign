import React from 'react'

import './Backdrop.css';

const Backdrop = ({ show, hide }) => {
  return show ? <div className='Backdrop' onClick={ hide } />  : null
}

export default Backdrop;
