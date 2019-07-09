import React from 'react';
import pictureOfMe from './person.jpg';
import './index.css';

function App() {
  return (
    <div>
      <header className="Header">
        <div className="Header--image">
          <img src={pictureOfMe} alt="My headshot" />
        </div>
      </header>
      <main>Main</main>
    </div>
  );
}

export default App;
