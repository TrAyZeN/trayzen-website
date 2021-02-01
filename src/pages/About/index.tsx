import React from 'react';
import NavBar from '../../components/NavBar';
import './style.scss';

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
    <NavBar items={[{ text: 'Home', to: '/' }, 'Projects']} />
  </div>
);

export default About;
