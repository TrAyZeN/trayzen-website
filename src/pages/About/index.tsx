import React, { memo } from 'react';
import NavBar from '../../components/NavBar';
import SocialButton from '../../components/SocialButton';
import './style.scss';

import Resume from '../../assets/resume.pdf';

const About: React.FC = () => (
  <div className="about">
    <div className="content">
      <h1>About me</h1>
      <div className="about-text">
        <p>
          Hi, I am a French computer science student.
          <br />I am passionate about <b>programming</b>, <b>sciences</b>
          .
          <br />I am <b>curious</b>, I love to <b>learn</b> new things but also
          to <b>create</b>
          .
          <br />
          If you are interested, here is my{' '}
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>{' '}
          <span role="img" aria-label="page">
            📄
          </span>
          .
        </p>
      </div>

      <div className="social">
        <SocialButton
          icon={`${process.env.PUBLIC_URL}/svg/email.svg`}
          link="mailto:lbenitoproduction@gmail.com"
          alt="email"
        />
        <SocialButton
          icon={`${process.env.PUBLIC_URL}/svg/github.svg`}
          link="https://github.com/trayzen"
          alt="github"
        />
        <SocialButton
          icon={`${process.env.PUBLIC_URL}/svg/gitlab.svg`}
          link="https://gitlab.com/TrAyZeN"
          alt="gitlab"
        />
        <SocialButton
          icon={`${process.env.PUBLIC_URL}/svg/linkedin.svg`}
          link="https://www.linkedin.com/in/leo-benito"
          alt="linkedin"
        />
      </div>
    </div>

    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects', 'About']} />
  </div>
);

export default memo(About);
