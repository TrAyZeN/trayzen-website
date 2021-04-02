import React from 'react';
import './style.scss';

type Props = {
  icon: string;
  link: string;
  alt?: string;
};

const SocialButton: React.FC<Props> = ({ link, icon, alt }: Props) => (
  <div className="social-button">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} className="icon" alt={alt} width="26" height="26" />
    </a>
  </div>
);

SocialButton.defaultProps = {
  alt: 'icon',
};

export default SocialButton;
