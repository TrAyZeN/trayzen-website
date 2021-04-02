import React from 'react';
import NavBar from '../../components/NavBar';
import './style.scss';

import Prism from '../../assets/prism.webp';
import Ora from '../../assets/ora.webp';
import EquipageSolidaire from '../../assets/equipage_solidaire.webp';
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
    <NavBar items={[{ text: 'Home', to: '/' }, 'Project', 'About']} />
    <div className="projects-container">
      <div className="project">
        <h2>Prism</h2>
        <a
          href="https://github.com/prismocr/ocr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img src={Prism} alt="Prism" />
            <div className="overlay">
              <div className="logo-container">
                <img src={CLogo} alt="C language" />
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
        <h2>ORA</h2>
        <a
          href="https://github.com/crab-wave/ora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img src={Ora} alt="ORA" />
            <div className="overlay">
              <div className="logo-container">
                <img src={CSharpLogo} alt="C Sharp" />
              </div>
              <p>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p>ORA is software that allows you to share files using P2P.</p>
      </div>
      <div className="project">
        <h2>L&apos;Equipage solidaire</h2>
        <a
          href="https://equipagesolidaire.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img src={EquipageSolidaire} alt="Equipage Solidaire" />
            <div className="overlay">
              <div className="logo-container">
                <img src={NodeJsLogo} alt="Node.JS" />
                <img src={ReactLogo} alt="React.JS" />
                <img src={SassLogo} alt="Sass" />
                <img src={MongoDbLogo} alt="MongoDB" />
                <img src={RedisLogo} alt="Redis" />
                <img src={DockerLogo} alt="Docker" />
              </div>
              <p>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p>
          A website for L&apos;Equipage Solidaire a french charity organization.
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
