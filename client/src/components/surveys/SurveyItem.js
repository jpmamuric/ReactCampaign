import React from 'react';

import './Survey.css';

const SurveyItem = ({ survey }) => {
  const { title, body, dateSent, respondedYes, respondedNo} = survey;
  return (
    <div className='survey-item'>
        <div className='survey-content'>
          <div className='survey-title'>{title}</div>
          <p className='survey-body'>{body}</p>
          <p className='survey-date'>
            Sent On: {new Date(dateSent).toLocaleDateString()}
          </p>
          <div className='survey-divider'/>
        </div>

        <div className='survey-cta'>
          <div>Yes: {respondedYes}</div>
          <div>No: {respondedNo}</div>
        </div>
    </div>
  );
}



export default SurveyItem;
