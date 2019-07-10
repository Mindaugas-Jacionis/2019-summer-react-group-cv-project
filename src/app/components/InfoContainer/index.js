import React from 'react';
import Title from '../Title';
import './index.scss';

function InfoContainer({ children, title, className }) {
  const classes = `InfoContainer ${className}`;

  return (
    <div className={classes}>
      <Title level="4">{title}</Title>
      {children}
    </div>
  );
}

export default InfoContainer;
