import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import landingImg from '../../../../assets/emails.png';
import Button from '../../layout/button/Button';
import './Landing.css';

const Landing = ({ user }) => {
  let landing = (
    <div>
      <div className='landing-container'>
        <img src={landingImg} alt='email surverys' className='landing-img'/>
        <div className='landing-text'>
          <h2 className='landing-heading'> The simple solution for online feedback. </h2>
          <p className='landing-heading-sub'>Collect feedback from your users emails.</p>
          <Button link='/auth/google' >Learn More</Button>
        </div>
      </div>
      <div className="landing-features"></div>
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
