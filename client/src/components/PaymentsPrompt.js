import React from 'react';

import './App.css';
import Payments from './Payments';

const PaymentsPrompt = () => (
  <div className='prompt-container'>
    <h2> Must have credits to add a Campaigns</h2>
    <div>Instructions:</div>
    <p> 1) Please input fake: email, expiration Month/Year, and CVC </p>
    <p> 2) Enter <b>'4242424242424242'</b> for test card number and submit.</p>
    <p> 3) You're all set! Look for <span className='prompt-btn'>+</span></p>
    <Payments />
  </div>
);

export default PaymentsPrompt;
