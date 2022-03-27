import React from 'react';
import NavBar from '../../components/NavBar';
import './style.scss';

import MyMips from '../../assets/my_mips.png';
import CrabRt from '../../assets/crab-rt.png';
import Prism from '../../assets/prism.webp';
import Ora from '../../assets/ora.webp';
import EquipageSolidaire from '../../assets/equipage_solidaire.webp';
import GottaGoCatch from '../../assets/gottagocatch.webp';

import RustLogo from '../../assets/rust.svg';
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
        <h2>k</h2>
        <h3>Feb. 2022 - Mar. 2022</h3>
        <a
          href="https://github.com/trayzen"
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
        <p className="description">
          k is a small x86 kernel. It features memory segmentation, syscalls,
          ELF loading, iso9660 filesystem. Multiple drivers are implemented such
          as: 8250 UART driver, 8259A PIC driver, 8042 keyboard driver, 8254 PIT
          driver, ATAPI driver.
        </p>
      </div>
      <div className="project">
        <h2>my_mips</h2>
        <h3>Dec. 2021 - Jan. 2022</h3>
        <a
          href="https://github.com/trayzen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img src={MyMips} alt="my_mips" width="1243" height="749" />
            <div className="overlay">
              <div className="logo-container">
                <img src={CLogo} alt="C language" width="60" height="60" />
              </div>
              <p style={{ color: 'white' }}>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p className="description">
          my_mips is a MIPS-I emulator. My implementation supports ELF loading
          and implements JIT compilation of MIPS instructions into x86
          instructions.
        </p>
      </div>
      <div className="project">
        <h2>42sh</h2>
        <h3>Nov. 2021 - Dec. 2021</h3>
        <a
          href="https://github.com/trayzen"
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
        <p className="description">42sh is a POSIX shell implementation.</p>
      </div>
      <div className="project">
        <h2>crab-rt</h2>
        <h3>Dec. 2020 - Now</h3>
        <a
          href="https://github.com/trayzen/crab-rt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container">
            <img src={CrabRt} alt="crab-rt" width="1243" height="749" />
            <div className="overlay">
              <div className="logo-container">
                <img
                  src={RustLogo}
                  alt="Rust language"
                  width="60"
                  height="60"
                />
              </div>
              <p style={{ color: 'white' }}>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p className="description">
          crab-rt is small Path Tracer running on CPU. It implements sphere
          shapes, lambertian material, specular reflection material, lights and
          more. It is multithreaded and implements Bounded Volume Hierarchy
          (BVH) as an acceleration structure.
        </p>
      </div>
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
        <p className="description">
          Prism is an OCR. It is a software that allows you to convert an image
          of text into text data. Prism features a CLI and GUI application. A
          neural network is used under the hood to recognize characters.
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
        <p className="description">
          A website for L&apos;Equipage Solidaire a french charity organization.
          Note that the backend is not hosted anymore and the domain name has
          not been renewed.
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
        <p className="description">
          ORA is Peer-to-Peer application for sharing files in groups. You can
          manage your files using a CLI or GUI application.
        </p>
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
              <p style={{ color: 'white' }}>Click to learn more ;)</p>
            </div>
          </div>
        </a>
        <p className="description">
          I created some video games during my free time. I made them on my own
          from graphics, to sound and logic. I developped them using various
          tools and game engines such as Construct 2 and GameMaker. Only few of
          them are available online but you can still take a look.
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
