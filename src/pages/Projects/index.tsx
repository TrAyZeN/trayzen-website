import React from 'react';
import NavBar from '../../components/NavBar';
import './style.scss';

import Prism from '../../assets/prism.webp';
import Ora from '../../assets/ora.webp';
import EquipageSolidaire from '../../assets/equipage_solidaire.webp';
import GottaGoCatch from '../../assets/gottagocatch.webp';

import CLogo from '../../assets/c.svg';
import CSharpLogo from '../../assets/csharp.svg';
import NodeJsLogo from '../../assets/nodejs.svg';
import ReactLogo from '../../assets/react.svg';
import SassLogo from '../../assets/sass.svg';
import MongoDbLogo from '../../assets/mongodb.svg';
import RedisLogo from '../../assets/redis.svg';
import DockerLogo from '../../assets/docker.svg';

const Projects: React.VFC = () => (
  <div className="projects">
    <h1>Projects</h1>
    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects', 'About']} />

    <div className="projects-container">
      <div className="project">
        <h2>Prism</h2>
        <h3>Sep. 2020 - Dec. 2020</h3>
        <a
          href="https://github.com/prismocr/ocr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img src={Prism} alt="Prism" width="1243" height="749" />
            <div className="overlay">
              <div className="logo-container">
                <img src={CLogo} alt="C language" width="60" height="60" />
              </div>
              <p style={{ color: 'white' }}>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p>
          Prism is a software that allows you to convert an image of text into
          text data.
        </p>
      </div>
      <div className="project">
        <h2>L&apos;Equipage solidaire</h2>
        <h3>Sep. 2020 - Nov. 2020</h3>
        <a
          href="https://equipagesolidaire.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img
              src={EquipageSolidaire}
              alt="Equipage Solidaire"
              width="1899"
              height="954"
            />
            <div className="overlay">
              <div className="logo-container">
                <img src={NodeJsLogo} alt="Node.JS" width="60" height="60" />
                <img src={ReactLogo} alt="React.JS" width="60" height="60" />
                <img src={SassLogo} alt="Sass" width="60" height="60" />
                <img src={MongoDbLogo} alt="MongoDB" width="60" height="60" />
                <img src={RedisLogo} alt="Redis" width="60" height="60" />
                <img src={DockerLogo} alt="Docker" width="60" height="60" />
              </div>
              <p>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p>
          A website for L&apos;Equipage Solidaire a french charity organization.
        </p>
      </div>
      <div className="project">
        <h2>ORA</h2>
        <h3>Jan. 2020 - May 2020</h3>
        <a
          href="https://github.com/crab-wave/ora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img src={Ora} alt="ORA" width="802" height="632" />
            <div className="overlay">
              <div className="logo-container">
                <img src={CSharpLogo} alt="C Sharp" width="60" height="60" />
              </div>
              <p>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p>ORA is software that allows you to share files using P2P.</p>
      </div>
      <div className="project">
        <h2>Idependant game making</h2>
        <h3>2016-2017</h3>
        <a
          href="https://trayzen.itch.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img
              src={GottaGoCatch}
              alt="Gotta go catch"
              width="798"
              height="598"
            />
            <div className="overlay">
              <p>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p className="description">
          I developped multiple video games on my own during my free time. I
          developped them using various tools and game engines. Only few of them
          are available online but you can still take a look.
        </p>
      </div>
      <div className="attributions">
        Icons by{' '}
        <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>{' '}
        on <a href="https://iconscout.com">Iconscout</a>
      </div>
    </div>
  </div>
);

export default Projects;
