import React from 'react'

import './Backdrop.css';

const Backdrop = ({ open, close }) => {
  return open ? <div className='Backdrop' onClick={ close } />  : null
}

export default Backdrop;
