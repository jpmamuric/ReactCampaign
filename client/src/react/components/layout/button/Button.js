import React from 'react';

import './Button.css';

const Button = ({ children, link }) => (
  <div className="btn-container">
    <a href={link} className="btn btn-animated">{children}</a>
  </div>
);

export default Button;
