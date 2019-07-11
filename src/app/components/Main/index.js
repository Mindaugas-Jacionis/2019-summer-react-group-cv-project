import React from 'react';
import InfoContainer from '../InfoContainer';
import { profile, contacts } from './data';
import './index.scss';

function LisItem({ label, text, href, target = '_self' }, index) {
  const props = target === '_blank' ? { target, rel: 'noopener noreferrer' } : { target };

  return (
    <li key={index}>
      <label>{label}</label>
      {href ? (
        <a href={href} {...props}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
}

function Main() {
  return (
    <main className="Main">
      <section className="Main--section">
        <InfoContainer title={profile.title} className="Main--section-profile">
          <p>{profile.text}</p>
        </InfoContainer>
        <InfoContainer title="Contacts" className="Main--section-contacts">
          <ul>{contacts.content.map(LisItem)}</ul>
        </InfoContainer>
        <InfoContainer title="Skills" className="Main--section-skills">
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
        </InfoContainer>
      </section>
      <section className="Main--section">
        <InfoContainer title="Education" className="Main--section-education">
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
        </InfoContainer>
        <InfoContainer title="Work Experience" className="Main--section-experience">
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
        </InfoContainer>
      </section>
    </main>
  );
}

export default Main;
