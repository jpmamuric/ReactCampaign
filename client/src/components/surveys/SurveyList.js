import React, { Component } from 'react';
import { connect }          from 'react-redux';

import SurveyItem from './SurveyItem';
import * as actions    from '../../actions/survey';
import './Survey.css';

class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderList(){
    return this.props.surveys.reverse().map( survey => <SurveyItem key={survey._id} survey={survey} /> );
  }

  render(){
    if ( this.props.surveys.length === 0 ) {
      return <div> You have no surveys right now </div>
    }
    return (
      <div className='survey-list'>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys: surveys.list };
}

export default connect(mapStateToProps, actions)(SurveyList);
