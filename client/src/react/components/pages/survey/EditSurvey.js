import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './CRUD.css';
import * as actions from '../../../../redux/actions/survey';

class EditSurvey extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSurvey(id);
  }

  render(){
    if(!this.props.item) {
      return null;
    }

    const { deleteSurvey, history} = this.props;
    const { title, subject, body, _id } = this.props.item;

    return (
      <div className='survey-edit-container'>
        <div className="survey-edit-item">
          <h2 className='survey-edit-title'>{title}</h2>
          <p className="survey-edit-subject"><b>Subject</b>: <br/>{subject}:</p>
          <div className="survey-edit-body"><b>Body</b>: <br/>{body}</div>
          <button className='survey-edit-delete'
            onClick={()=>deleteSurvey(_id, history)}>Delete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => {
  const { item } = surveys;
  return { item };
}

export default connect(mapStateToProps, actions)(withRouter(EditSurvey));
