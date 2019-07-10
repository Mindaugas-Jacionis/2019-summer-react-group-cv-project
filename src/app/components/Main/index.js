import React from 'react';
import InfoContainer from '../InfoContainer';
import './index.scss';

function Main() {
  return (
    <main className="Main">
      <section className="Main--section">
        <InfoContainer title="Profile" className="Main--section-profile">
          <p>
            Chupa chups caramels chocolate bar muffin candy bear claw. Carrot cake sweet roll oat
            cake dragée fruitcake cookie macaroon powder. Chocolate sesame snaps caramels pastry.
            Candy canes pie carrot cake brownie cake cupcake sweet. Marshmallow candy canes danish
            caramels muffin sesame snaps donut.
          </p>
        </InfoContainer>
        <div className="Main--section-contacts Main--section-container">
          <h4>Contacts</h4>
          <ul>
            <li>
              <label>Address</label>
              <span>Rainbow st. 96, New Sidney</span>
            </li>
            <li>
              <label>Phone</label>
              <a href="tel:+440999999999">+440999999999</a>
            </li>
            <li>
              <label>Email</label>
              <a href="mailto:test@dummy.com?subject=Hello from Web">test@dummy.com</a>
            </li>
            <li>
              <label>GitHub</label>
              <a
                href="https://github.com/mindaugas-jacionis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mindaugas-Jacionis
              </a>
            </li>
            <li>
              <label>Linkedin</label>
              <a
                href="https://www.linkedin.com/in/mindaugas-jačionis-b866ab57"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mindaugas Jačionis
              </a>
            </li>
          </ul>
        </div>
        <div className="Main--section-skills Main--section-container">
          <h4>Skills</h4>
          <ul>
            <li>
              <span>Sleeping</span>
              <span>Advanced</span>
            </li>
            <li>
              <span>Eating</span>
              <span>Intermediate</span>
            </li>
            <li>
              <span>Running</span>
              <span>Beginner</span>
            </li>
            <li>
              <span>Driving</span>
              <span>Advanced</span>
            </li>
            <li>
              <span>Working</span>
              <span>Beginner</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="Main--section">
        <div className="Main--section-education Main--section-container">
          <h4>Education</h4>
          <ul>
            <li>
              <p>Hogwarts School of Witchcraft and Wizardry - 2013</p>
              <p>Defense Against Dark Arts</p>
            </li>
            <li>
              <p>Code Academy, Vilnius - 2019</p>
              <p>FrontEnd Engineering</p>
            </li>
            <li>
              <p>Disco Dance School 3000 - 2019</p>
              <p>Shake Shake Shake</p>
            </li>
          </ul>
        </div>
        <div className="Main--section-experience Main--section-container">
          <h4>Work Experience</h4>
          <ul>
            <li>
              <p>UAB Twitter • 2019.01 - Present</p>
              <p>FrontEnd Rockstar</p>
            </li>
            <li>
              <p>Uber Eats • 2017.01 - 2019.01</p>
              <p>Eating mySQL DBs</p>
            </li>
            <li>
              <p>UAB Adform • 2016.01 - 2017.01</p>
              <p>Web Tracking Guru</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
