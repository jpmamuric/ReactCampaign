import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions/survey';
import formFields   from './form_fields';
import './Survey.css';

const SurveyFormReview = ({ onCancelReview, values, submitSurvey, history }) => {
  const reviewFields = formFields.map((field,i) => {
      return (
        <div key={i} className='survey-review-item'>
          <label className='survey-review-label'>{field.label}:</label>
          <div className='survey-review-name'>{values[field.name]}</div>
        </div>
      );
    });

  return (
    <div className='survey-review-form-container' >
      <h5 className='survey-review-header'>Please confirm your entries</h5>
      {reviewFields}
      <div className='survey-review-btns'>
        <button
          className='survey-review-back'
          onClick={onCancelReview}>
          Back
        </button>
        <button
          className='survey-review-send'
          onClick={()=>submitSurvey(values, history)}>
          Send
          <i className='material-icons right' >email</i>
        </button>
      </div>
    </div>
  )
};

const mapStateToProps = ({ form }) => {
  const { values } = form.surveyForm;
  return { values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
