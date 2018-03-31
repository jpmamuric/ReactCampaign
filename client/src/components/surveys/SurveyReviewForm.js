import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions/survey';
import formFields   from './form_fields';

const SurveyFormReview = ({ onCancelReview, values, submitSurvey, history }) => {
  const reviewFields = formFields.map((field,i) => {
      return (
        <div key={i} className='survey_review_form'>
          <label>{field.label}</label>
          <div>{values[field.name]}</div>
        </div>
      );
    });

  return (
    <div style={{ padding: 25 }}>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className='yellow white-text darken-3 btn-flat left'
        onClick={onCancelReview}>
        Back
      </button>
      <button
        className='green white-text btn-flat right'
        onClick={()=>submitSurvey(values, history)}>
        Send
        <i className='material-icons right' >email</i>
      </button>
    </div>
  )
};

const mapStateToProps = ({ form }) => {
  const { values } = form.surveyForm;
  return { values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
