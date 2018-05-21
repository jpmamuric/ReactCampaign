import React from 'react';
import { connect } from 'react-redux';

import './Payments.css';
import Payments from './Payments';
import * as actions from '../../actions/auth';

const PaymentsPrompt = ({ hasCredits, userCredits }) => (
  <div className='prompt-container'>
    <h2 className='prompt-header'> Must have credits to add a Campaigns</h2>
    <div>Instructions:</div>
    <p className='prompt-text'> 1) Please input fake: email, expiration Month/Year, and CVC </p>
    <p className='prompt-text'> 2) Enter <b>'4242424242424242'</b> for test card number and submit.</p>
    <p className='prompt-text'> 3) You're all set! When you have credits, Look for: <span className='prompt-btn'>+</span> to create campaigns.</p>
    <div className='prompt-btns'>
        { hasCredits ? null : <button className='prompt-btn-close' onClick={()=>userCredits()}>Close</button> }
        <Payments />
    </div>


  </div>
);

const mapStateToProps = ({ auth }) => {
  const { hasCredits } = auth;
  return { hasCredits };
}

export default connect(mapStateToProps, actions)(PaymentsPrompt);
