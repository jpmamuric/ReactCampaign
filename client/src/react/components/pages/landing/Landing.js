import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import landingImg from '../../../../assets/emails.png';
import envelope from '../../../../assets/envelope.png';
import form from '../../../../assets/form.png';
import stats from '../../../../assets/stats.png';
import Button from '../../layout/button/Button';
import Footer from '../../layout/footer/Footer';
import './Landing.css';

const Landing = ({ user }) => {
  const features = [
    {
       heading: 'Create a survey',
       description: 'Fill out a simple form',
       alt: 'survey form',
       src: form,
    },
    {
      heading: 'Email recipients',
      description: 'Send your survey to random or target audiences',
      alt: 'email envelope',
      src: envelope
    },
    {
      heading: 'Record feedback',
      description: 'Analyze data and grow your business',
      alt: 'stats bar',
      src: stats
    }
  ];

  let landing = (
    <div>
      <div className='landing-container'>
        <img src={landingImg} alt='email surverys' className='landing-img'/>
        <div className='landing-text'>
          <h2 className='landing-heading'> The simple solution for online campaigns </h2>
          <p className='landing-heading-sub'>Collect feedback from your users emails.</p>
          <Button link='/auth/google' >Learn More</Button>
        </div>
      </div>
      <div className="landing-features">
        <h2 className='landing-features-heading heading-1'> Campaign in 3 easy steps </h2>
        <ul className="landing-features-list">
          {
            features.map((feature, i) => (
              <li className="landing-features-item" key={i}>
                <img className='landing-features-item-img' src={feature.src} alt={feature.alt}/>
                <div className='landing-features-item-text'>
                  <h2 className='landing-features-item-heading'>{feature.heading}</h2>
                  <p className='landing-features-item-description'>{feature.description}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <Footer />
    </div>

  )

  if( user ) {
    landing = <Redirect to="/dashboard"/>
  }

  return landing;
}
const mapStateToProps = ({ auth })=> {
  return { user : auth.user };
}

export default connect(mapStateToProps)(Landing);
