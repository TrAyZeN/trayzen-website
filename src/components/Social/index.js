import React from 'react';
import './style.scss';

const Social = ({ link, icon }) => {
  return (
    <div className="Social">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} className="Social-icon" alt="icon" />
      </a>
    </div>
  );
};

export default Social;
