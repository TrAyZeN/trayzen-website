import React, { memo } from 'react';
import './style.scss';

import NavBar from '../../components/NavBar';
import ProfilePicture from '../../assets/profile.webp';

const Home: React.FC = () => (
  <div className="home">
    <div className="profile">
      <div className="container">
        <img
          className="profile-picture"
          src={ProfilePicture}
          alt="Profile"
          width="300"
          height="300"
        />
      </div>
      <p>Hi I am TrAyZeN</p>
    </div>
    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects', 'About']} />
  </div>
);

export default memo(Home);
