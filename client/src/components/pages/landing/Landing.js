import React from 'react';


import landing from '../../../assets/emails.png'
import './Landing.css';

const Landing = () => {
  return (
    <div className='Landing-container'>
      <img src={landing} alt='email surverys' className='Landing-img'/>
      <div className='Landing-text'>
        <h2 className='Landing-heading'> Welcome! </h2>
        <p className='Landing-heading-sub'>Collect feedback from your users emails.</p>
      </div>
    </div>
  )
}

export default Landing;
