import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router-dom';

import SurveyList from '../../surveys/SurveyList';
import Modal from '../../ui/modal/Modal';
import PaymentsPrompt from '../../payments/PaymentsPrompt';
import * as actions from '../../../actions/payments';

import'./Dashboard.css'

class Dashboard extends Component {
  render(){
    const { user } = this.props;
    if(!user) {
      return <div> Loading ... </div>
    }

    let paymentsPrompt = null;

    if(user.credits === 0 ){
      paymentsPrompt = <PaymentsPrompt />
    }

    let addCampaign = (
      <div className="fixed-action-btn">
        <Link to='/dashboard/new-survey' className="fixed-action-btn-link">
          +
        </Link>
      </div>
    )

    return (
      <div className='dashboard-container'>
        <Modal open={user.credits === 0 } close={user.credits > 0 } >
          { paymentsPrompt }
        </Modal>

        <SurveyList />
        { user.credits !== 0 && !user.skipped ? addCampaign : null }
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
}

export default connect(mapStateToProps, actions)(Dashboard);
