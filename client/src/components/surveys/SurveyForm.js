import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link }             from 'react-router-dom';

import formFields           from './form_fields';
import validateEmails       from '../../utils/validate_emails';
import './Survey.css';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: 5 }}/>
      <div className='red-text'>
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
      <div className='container'>
        <form className='survey_form' onSubmit={this.props.handleSubmit(onSurveySubmit) }>
          { this.renderFields() }
          <Link to='/dashboard' className='red btn-flat left white-text'>Cancel </Link>
          <button type='submit' className='blue btn-flat right white-text'>Review </button>
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
