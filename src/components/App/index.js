import React from 'react';
import './style.scss';

import Social from '../Social';
import Project from '../Project';

import profile_picture from '../../assets/profile_picture.png';
import github from '../../assets/github.png';
import gitlab from '../../assets/gitlab.png';
import linkedin from '../../assets/linkedin.png'
import mail from '../../assets/mail.png';
import resume from '../../assets/resume.pdf';

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

        <div className="Description">
          <p>
            Interested in Mathematics, Engineering, Electronics, 5+ years of programming.
          </p>
          <p>
            Investigating old source code, hacking and practicing competitive programming in my spare time.
          </p>
          <p>
            Also, producing clean code, learning TDD, and other technologies or methods, I love to learn new things.
          </p>
        </div>

        <div className="Social-links">
          <Social link="mailto:lbenitoproduction@gmail.com"
                  icon={mail} />
          <Social link="https://github.com/TrAyZeN"
                  icon={github} />
          <Social link="https://gitlab.com/TrAyZeN"
                  icon={gitlab} />
          <Social link="https://www.linkedin.com/in/leo-benito"
                  icon={linkedin} />
          <a href={resume}
             target="_blank"
             rel="noopener noreferrer">
            <button>Resume</button>
          </a>
        </div>
      </header>

      <div className="ProjectList">
        <h1>Projects</h1>

        <div className="Project-Box">
          <Project user="TrAyZeN"
                   name="brainfuck-interpreter" />
          <Project user="TrAyZeN"
                   name="steg-cli" />
          <Project user="TrAyZeN"
                   name="youtube-downloader" />
          <Project user="Crab-Wave"
                   name="ora" />
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
