import React from 'react';
import './style.scss';

import Social from '../Social';
import ProjectList from '../ProjectList';

import profile_picture from '../../assets/profile_picture.png';
import github from '../../assets/github.svg';
import mail from '../../assets/mail.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile_picture}
             className="Profile-picture"
             alt="profile_picture" />

        <h1>TrAyZeN</h1>

        <p className="Status">
          Self taught programmer addicted to learning
        </p>

        <hr className="Vertical-line" />

        <div className="Social-links">
          <Social href="mailto:lbenitoproduction@gmail.com"
                  src={mail} />
          <Social href="https://github.com/TrAyZeN"
                  src={github} />
          <button>Resume</button>
        </div>
      </header>

      <ProjectList />

      <footer className="App-footer">
        <p>This website has been created by TrAyZeN</p>
        <p><a href="https://github.com/TrAyZeN/trayzen-website">See the source code here</a></p>
      </footer>
    </div>
  );
}

export default App;
