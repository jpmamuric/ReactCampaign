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
      <h2> Welcome! </h2>
      <p style={{ padding: '0 1.5em'}}>Use React Campaign to collect feedback from your users emails</p>
    </div>
  )
}

export default Landing;
