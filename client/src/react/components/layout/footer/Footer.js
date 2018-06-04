import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className='footer'>
   <p className='footer-copyright'>
      <span className='footer-span'>
      Copyright &copy;  Built by
      <a
        target='_blank'
        rel="noopener noreferrer"
        href='https://jpmamuric.github.io/portfolio/'
        className='footer-link'>Jan Peter Mamuric
      </a>
        2017 - { new Date().getFullYear() }.
      </span>
    </p>
  </div>
);

export default Footer;
