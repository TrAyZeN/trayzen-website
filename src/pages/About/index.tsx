import React from 'react';
import NavBar from '../../components/NavBar';
import SocialButton from '../../components/SocialButton';
import './style.scss';

import EmailIcon from '../../assets/email.svg';
import GithubIcon from '../../assets/github.svg';
import GitlabIcon from '../../assets/gitlab.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

const About: React.VFC = () => (
  <div className="about">
    <h1>About me</h1>
    <p>
      Hi I am TrayZeN, I am Interested in Mathematics, Engineering, Electronics,
      6+ years of programming. Investigating old source code, hacking and
      practicing competitive programming in my spare time. Also, producing clean
      code, learning TDD, and other technologies or methods, I love to learn new
      things.
    </p>

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

    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects']} />
  </div>
);

export default About;
