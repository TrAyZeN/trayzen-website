import React from 'react';
import './style.scss';

import Social from '../Social';
import Project from '../Project';

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

        <p className="Status">Computer Science Student at EPITA</p>

        <hr className="Vertical-line" />

        <p className="Description">
          Interested in Mathematics, Engineering, Electronics, 5+ years of programming.
          Investigating old source code, hacking and practicing competitive programming in my spare time.
          Also, producing clean code, learning TDD, and other technologies or methods, I love to learn new things.
        </p>

        <div className="Social-links">
          <Social href="mailto:lbenitoproduction@gmail.com"
                  src={mail} />
          <Social href="https://github.com/TrAyZeN"
                  src={github} />
          <button>Resume</button>
        </div>
      </header>

      <div className="ProjectList">
        <h1>Projects</h1>

        <div className="Project-Box">
          <Project name="brainfuck-interpreter" />
          <Project name="steg-cli" />
          <Project name="youtube-downloader" />
          <Project name="DocSaverPy" />
        </div>
      </div>

      <footer className="App-footer">
        <p>This website has been created by TrAyZeN</p>
        <p><a href="https://github.com/TrAyZeN/trayzen-website">See the source code here</a></p>
      </footer>
    </div>
  );
}

export default App;
