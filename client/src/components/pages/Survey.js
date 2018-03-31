import React, { Component } from 'react';
import { reduxForm }        from 'redux-form';

import SurveyForm           from '../surveys/SurveyForm';
import SurveyReviewForm     from '../surveys/SurveyReviewForm';

class Survey extends Component {
  //babel plugin allows simple state initialization
  state = { showReviewForm: false };

  renderForm(){
    if (this.state.showReviewForm ) {
      return <SurveyReviewForm
        onCancelReview={()=>this.setState({ showReviewForm: false })}
      />
    }
    return <SurveyForm
      onSurveySubmit={()=> this.setState({ showReviewForm : true })}
    />
  }

  render(){
    return <div>{this.renderForm()}</div>
  }
}

export default reduxForm({
  form: 'surveyForm'
})(Survey);
