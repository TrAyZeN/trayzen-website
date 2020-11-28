import React from 'react';
import './style.scss';

type Props = {
  link: string;
  icon: string;
};

const Social: React.FC<Props> = ({ link, icon }) => (
  <div className="Social">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} className="Social-icon" alt="icon" />
    </a>
  </div>
);

export default Social;
