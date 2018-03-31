import React, { Component } from 'react';
import { connect }          from 'react-redux';

import * as actions         from '../../actions/survey';

class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderList(){
    return this.props.surveys.reverse().map( survey => {
      const { _id, title, body, dateSent, respondedYes, respondedNo} = survey;
      return (
        <div className='container' key={_id}>
          <div className='card darken-1' >
            <div className='card-content'>
              <span className='card-title'>{title}</span>
              <p>{body}</p>
              <p className='right'>
                Sent On: {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className='card-action'>
              <div>Yes: {respondedYes}</div>
              <div>No: {respondedNo}</div>
            </div>
          </div>
        </div>

      )
    });
  }

  render(){
    if ( this.props.surveys.length === 0 ) {
      return <div> You have no surveys right now </div>
    }
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
}

export default connect(mapStateToProps, actions)(SurveyList);
