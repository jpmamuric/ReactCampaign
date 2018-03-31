import React from 'react';


import landing from '../../assets/emails.png'
import '../App.css';

const Landing = () => {
  return (
    <div className='Landing-container'>
      <img src={landing} alt='email surverys' className='landing'/>
      <div className='Landing-text'>
        <h2> Welcome! </h2>
        <p style={{ padding: '0 1.5em'}}>Collect feedback from your users emails.</p>
      </div>
    </div>
  )
}

export default Landing;
