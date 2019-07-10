import React from 'react';
import pictureOfMe from '../../../images/person.jpg';
import blueStroke from '../../../images/brush-stroke-three.png';
import './index.scss';

function Header() {
  return (
    <header className="Header">
      <div className="Header--image">
        <img src={pictureOfMe} alt="My headshot" />
      </div>
      <div className="Header--title">
        <h1>Harry Potter</h1>
        <h3>Wizard of Oz</h3>
      </div>
      <img src={blueStroke} alt="Paint brush stroke illustration" className="Header--decoration" />
    </header>
  );
}

export default Header;
