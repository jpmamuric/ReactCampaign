import React from 'react';
import { Link } from 'react-router-dom';

import './Survey.css';

const SurveyItem = ({ survey }) => {
  const { title, body, dateSent, respondedYes, respondedNo, _id } = survey;
  return (
    <Link className='survey-item' to={`/dashboard/edit/${_id}`}>
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
    </Link>
  );
}



export default SurveyItem;
