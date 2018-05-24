import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link }             from 'react-router-dom';

import formFields           from './form_fields';
import validateEmails       from '../../utils/validate_emails';
import './Survey.css';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='survey-form-item'>
      <label className='survey-form-label'>{label}</label><br />
      <input {...input} className='survey-form-input'/>
      <div className='survey-form-error'>
        { touched && error }
      </div>
    </div>
  )
}

const FIELDS = formFields;

class SurveyForm extends Component {
  renderFields(){
    return FIELDS.map((field, i) => {
      return <Field
        type='text'
        key={i}
        name={field.name}
        label={field.label}
        component={SurveyField}
      />
  });
  }

  render(){
    const { onSurveySubmit } = this.props;
    return (
      <div className='survery-form-container'>
        <form className='survey-form' onSubmit={this.props.handleSubmit(onSurveySubmit) }>
          { this.renderFields() }
          <div className='survey-form-btns'>
            <Link to='/dashboard' className='survey-form-btn-cancel'>Cancel </Link>
            <button type='submit' className='survey-form-btn-review'>Review </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  FIELDS.forEach( ({ name, noValueError }) => {
    if(!values[name]) {
      errors[name] = noValueError
    };
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
