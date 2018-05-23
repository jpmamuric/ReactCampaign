import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect }    from 'react-router-dom';

import SurveyList from '../../surveys/SurveyList';
import Modal from '../../ui/modal/Modal';
import PaymentsPrompt from '../../payments/PaymentsPrompt';
import * as actions from '../../../actions/payments';

import'./Dashboard.css'

class Dashboard extends Component {
  renderDashboard(user) {
    let paymentsPrompt = null;

    let addCampaign = (
      <div className="fixed-action-btn">
        <Link to='/dashboard/new-survey' className="fixed-action-btn-link">
          +
        </Link>
      </div>
    )

    switch (user) {
      case null:
        return  <div> Loading ... </div>
      case false:
        return <Redirect to="/" />
      default:
        if(user.credits === 0 ){
          paymentsPrompt = <PaymentsPrompt />
        }

        return (
          <div>
            <Modal open={user.credits === 0 } close={user.credits > 0 } >
              { paymentsPrompt }
            </Modal>

            <SurveyList />
            { user.credits !== 0 && !user.skipped ? addCampaign : null }
          </div>
        );
     }
  }

  render(){
    return (
        <div className='dashboard-container'>
          { this.renderDashboard(this.props.user) }
        </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
}

export default connect(mapStateToProps, actions)(Dashboard);
