import React from 'react';
import './style.scss';

import ProfilePicture from '../../assets/profile.png';

const Home: React.VFC = () => (
  <div className="home">
    <div className="left-panel">
      <img className="profile-picture" src={ProfilePicture} alt="Profile" />
      <h1>Hi I am TrAyZeN</h1>
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
    </div>
  </div>
);

export default Home;
