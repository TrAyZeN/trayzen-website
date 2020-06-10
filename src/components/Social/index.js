import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Social = ({ link, icon }) => (
  <div className="Social">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} className="Social-icon" alt="icon" />
    </a>
  </div>
);

Social.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Social;
