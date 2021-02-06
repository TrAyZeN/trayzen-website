import React, { memo } from 'react';
import './style.scss';

import NavBar from '../../components/NavBar';
import ProfilePicture from '../../assets/profile.png';

const Home: React.VFC = () => (
  <div className="home">
    <div className="profile">
      <div className="container">
        <img className="profile-picture" src={ProfilePicture} alt="Profile" />
      </div>
      <p>Hi I am TrAyZeN</p>
    </div>
    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects', 'About']} />
  </div>
);

export default memo(Home);
