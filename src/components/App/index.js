import React from 'react';
import './style.scss';

import Social from '../Social';
import ProjectList from '../ProjectList';

import profile_picture from '../../assets/profile_picture.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile_picture} className="Profile-picture" alt="profile_picture" />

        <h1>TrAyZeN</h1>

        <p className="Status">
          Self taught programmer addicted to learning
        </p>

        <hr className="Vertical-line" />

        <Social />
      </header>

      <ProjectList />

      <footer className="App-footer">
        <p>This website as been created by TrAyZeN</p>
        <p><a href="https://github.com/TrAyZeN/trayzen-website">See the source code here</a></p>
      </footer>
    </div>
  );
}

export default App;
