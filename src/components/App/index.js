import React from 'react';
import './style.scss';

import profile_picture from '../../assets/profile_picture.png';
import github from '../../assets/github.png';

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

        <a href="https://github.com/TrAyZeN">
          <img src={github} className="Social-icon" />
        </a>

        {/* <p className="Description">
          I love to code and to play with maths.
        </p> */}

      </header>
    </div>
  );
}

export default App;
