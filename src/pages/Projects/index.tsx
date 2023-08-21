import React from 'react';
import NavBar from '../../components/NavBar';
import Project, { Technology } from '../../components/Project';
import './style.scss';

import K from '../../assets/k.png';
import MyMips from '../../assets/my_mips.png';
import _42Sh from '../../assets/42sh.png';
import CrabRt from '../../assets/crab-rt.png';
import Prism from '../../assets/prism.webp';
import Ora from '../../assets/ora.webp';
import EquipageSolidaire from '../../assets/equipage_solidaire.webp';
import GottaGoCatch from '../../assets/gottagocatch.webp';

const Projects: React.VFC = () => (
  <div className="projects">
    <h1>Projects</h1>
    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects', 'About']} />

    <div className="projects-container">
      <Project
        name="k"
        date="Feb. 2022 - Mar. 2022"
        image={<img src={K} alt="k" width="1243" height="749" />}
        technologies={[Technology.C]}
        description="k is a small x86 kernel. It features memory segmentation, syscalls,
          ELF loading, iso9660 filesystem. Multiple drivers are implemented such
          as: 8250 UART driver, 8259A PIC driver, 8042 keyboard driver, 8254 PIT
          driver, ATAPI driver."
      />
      <Project
        name="my_mips"
        date="Dec. 2021 - Jan. 2022"
        image={<img src={MyMips} alt="my_mips" width="1243" height="749" />}
        technologies={[Technology.C]}
        description="
          my_mips is a MIPS-I emulator. My implementation supports ELF loading
          and implements JIT compilation of MIPS instructions into x86
          instructions."
      />
      <Project
        name="42sh"
        date="Nov. 2021 - Dec. 2021"
        image={<img src={_42Sh} alt="Prism" width="1243" height="749" />}
        technologies={[Technology.C]}
        description="42sh is a POSIX shell implementation."
      />
      <Project
        name="crab-rt"
        date="Dec. 2020 - Now"
        link="https://github.com/trayzen/crab-rt"
        image={<img src={CrabRt} alt="crab-rt" width="1243" height="749" />}
        technologies={[Technology.Rust]}
        description="crab-rt is small Path Tracer running on CPU. It implements sphere
          shapes, lambertian material, specular reflection material, lights and
          more. It is multithreaded and implements Bounded Volume Hierarchy
          (BVH) as an acceleration structure."
      />
      <Project
        name="Prism"
        date="Sep. 2020 - Dec. 2020"
        link="https://github.com/prismocr/ocr"
        image={<img src={Prism} alt="Prism" width="1243" height="749" />}
        technologies={[Technology.C]}
        description="Prism is an OCR. It is a software that allows you to convert an image
          of text into text data. Prism features a CLI and GUI application. A
          neural network is used under the hood to recognize characters."
      />
      <Project
        name="L'Equipage solidaire"
        date="Sep. 2020 - Nov. 2020"
        link="https://equipagesolidaire.org"
        image={
          <img
            src={EquipageSolidaire}
            alt="Equipage Solidaire"
            width="1899"
            height="954"
          />
        }
        technologies={[
          Technology.NodeJs,
          Technology.React,
          Technology.Sass,
          Technology.MongoDb,
          Technology.Redis,
          Technology.Docker,
        ]}
        description="A website for L'Equipage Solidaire a french charity organization.
          Note that the backend is not hosted anymore and the domain name has
          not been renewed."
      />
      <Project
        name="ORA"
        date="Jan. 2020 - May 2020"
        link="https://github.com/crab-wave/ora"
        image={<img src={Ora} alt="ORA" width="802" height="632" />}
        technologies={[Technology.CSharp]}
        description="ORA is Peer-to-Peer application for sharing files in groups. You can
          manage your files using a CLI or GUI application."
      />
      <Project
        name="Independant game making"
        date="2016-2017"
        link="https://trayzen.itch.io"
        image={
          <img
            src={GottaGoCatch}
            alt="Gotta go catch"
            width="798"
            height="598"
          />
        }
        description="I created some video games during my free time. I made them on my own
          from graphics, to sound and logic. I developped them using various
          tools and game engines such as Construct 2 and GameMaker. Only few of
          them are available online but you can still take a look."
      />
      <div className="attributions">
        Icons by{' '}
        <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>{' '}
        on <a href="https://iconscout.com">Iconscout</a>
      </div>
    </div>
  </div>
);

export default Projects;
