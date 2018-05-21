import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import landingImg from '../../../assets/emails.png';
import './Landing.css';

const Landing = ({ user }) => {
  let landing = (
    <div className='Landing-container'>
      <img src={landingImg} alt='email surverys' className='Landing-img'/>
      <div className='Landing-text'>
        <h2 className='Landing-heading'> Welcome! </h2>
        <p className='Landing-heading-sub'>Collect feedback from your users emails.</p>
      </div>
    </div>
  )

  if( user ) {
    landing = <Redirect to="/dashboard"/>
  }

  return landing;
}
const mapStateToProps = ({ auth })=> {
  return { user : auth.user };
}

export default connect(mapStateToProps)(Landing);
