import React from 'react';
import './style.scss';

import ProfilePicture from '../../assets/profile.png';

const Home: React.VFC = () => (
  <div className="home">
    <div className="profile">
      <img className="profile-picture" src={ProfilePicture} alt="Profile" />
      <p>Hi I am TrAyZeN</p>
    </div>
    <div className="navbar">
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
    </div>
  </div>
);

export default Home;
