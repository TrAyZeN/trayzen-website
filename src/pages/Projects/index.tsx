import React from 'react';
import './style.scss';

import Prism from '../../assets/prism.png';
import Ora from '../../assets/ora.png';
import EquipageSolidaire from '../../assets/equipage_solidaire.png';

const Projects: React.VFC = () => (
  <div className="projects">
    <h1>Projects</h1>
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
              <p>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p>
          A website for L&apos;Equipage Solidaire a french charity organization.
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
