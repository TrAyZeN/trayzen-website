import React from 'react';
import './style.scss';

import NavBar from '../../components/NavBar';
import ProfilePicture from '../../assets/profile.png';

const Home: React.VFC = () => (
  <div className="home">
    <div className="profile">
      <img className="profile-picture" src={ProfilePicture} alt="Profile" />
      <p>Hi I am TrAyZeN</p>
    </div>
    <NavBar items={['Projects', 'About']} />
  </div>
);

export default Home;
