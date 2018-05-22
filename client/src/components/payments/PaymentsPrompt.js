import React from 'react';
import { connect } from 'react-redux';

import './Payments.css';
import Payments from './Payments';
import * as actions from '../../actions/payments';

const PaymentsPrompt = ({ hasCredits, skipPayments, user }) => (
  <div className='prompt-container'>
    <h2 className='prompt-header'> Hello there, { user.googleName}</h2>
    <div>looks like you have no credits.</div>
    <div>Instructions:</div>
    <p className='prompt-text'> 1) Please input fake: email, expiration Month/Year, and CVC </p>
    <p className='prompt-text'> 2) Enter <b className='prompt-card-number'>'4242-4242-4242-4242'</b> for test card number and submit.</p>
    <p className='prompt-text'> 3) You're all set! When you have credits, Look for: <span className='prompt-btn'>+</span> to create campaigns.</p>
    <div className='prompt-btns'>
        { hasCredits ? null : <button className='prompt-btn-close' onClick={()=>skipPayments()}>Skip</button> }
        <Payments />
    </div>
  </div>
);

const mapStateToProps = ({ auth }) => {
  const { hasCredits, user } = auth;
  return { hasCredits, user };
}

export default connect(mapStateToProps, actions)(PaymentsPrompt);
