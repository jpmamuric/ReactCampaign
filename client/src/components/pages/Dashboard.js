import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router-dom';

import SurveyList from '../surveys/SurveyList';

class Dashboard extends React.Component {
  render(){
    const { user } = this.props;
    if(!user) {
      return <div> Loading ... </div>
    }

    let addCampaign = (
      <div className="fixed-action-btn">
        <Link to='/dashboard/new-survey' className="btn-floating btn-large blue">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )

    return (
      <div>
        <div style={{ margin: 20 }}>
          <h4> Must have credits to add a Campaigns!</h4>
          <div>Instructions</div>
          <div> 1) Click on 'Add Credits' in top right corner. </div>
          <div> 2) Please input fake: email, expiration Month/Year, and CVC. (Normally 3 digits)</div>
          <div> 3) Enter '4242424242424242' for test card number. </div>
          <div> 4) A Blue '+' Button will appear.</div>
          <div> 5) You're all set! </div>
        </div>

        <SurveyList />
        { user.credits !== 0 ? addCampaign : null }
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
}

export default connect(mapStateToProps)(Dashboard);
