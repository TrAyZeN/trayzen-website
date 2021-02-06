import React, { memo } from 'react';
import NavBar from '../../components/NavBar';
import SocialButton from '../../components/SocialButton';
import './style.scss';

import Resume from '../../assets/resume.pdf';
import EmailIcon from '../../assets/email.svg';
import GithubIcon from '../../assets/github.svg';
import GitlabIcon from '../../assets/gitlab.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

const About: React.VFC = () => (
  <div className="about">
    <div className="content">
      <h1>About me</h1>
      <div className="about-text">
        <p>
          Hi, I am a French computer science student. I am passionate about{' '}
          <b>programming</b>, <b>curious</b> and love to <b>learn </b>
          new things. If you are interested here is my{' '}
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>
          .
        </p>
      </div>

      <div className="social">
        <SocialButton
          icon={EmailIcon}
          link="mailto:lbenitoproduction@gmail.com"
          alt="email"
        />
        <SocialButton
          icon={GithubIcon}
          link="https://github.com/trayzen"
          alt="github"
        />
        <SocialButton
          icon={GitlabIcon}
          link="https://gitlab.com/TrAyZeN"
          alt="gitlab"
        />
        <SocialButton
          icon={LinkedinIcon}
          link="https://www.linkedin.com/in/leo-benito"
          alt="linkedin"
        />
      </div>
    </div>

    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects', 'About']} />
  </div>
);

export default memo(About);
