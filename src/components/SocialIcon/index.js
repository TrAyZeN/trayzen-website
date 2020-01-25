import React from 'react';
import './style.scss';

function SocialIcon(props) {
  return (
    <a href={props.link}>
      <img src={props.src}
           className="Social-icon"
           alt="icon" />
    </a>
  );
}

export default SocialIcon;
