import React, { Component } from 'react'
import StripeCheckout       from 'react-stripe-checkout';
import { connect }          from 'react-redux';

import * as actions         from '../../../redux/actions/payments';
import './Payments.css';

class Payments extends Component {
  render(){
    const { handleStripeToken } = this.props
    return (
      <StripeCheckout
          name='React Campaign'
          amount={100}
          token={token => handleStripeToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_PK}
        >
        <div className='btn_stripe_checkout'>Add Credits</div>
        </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
