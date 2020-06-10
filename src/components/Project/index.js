import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import './style.scss';

const getRepositoryInformation = (user, name) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.github.com/repos/${user}/${name}`)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });

const Project = ({ user, name }) => {
  const [description, setDescription] = useState('');
  const [htmlUrl, setHtmlUrl] = useState('');

  getRepositoryInformation(user, name)
    .then((response) => response.json())
    .then(({ description, html_url }) => {
      setDescription(description);
      setHtmlUrl(html_url);
    });

  return (
    <div className="Project">
      <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
        <button type="button">
          <h2>{name}</h2>
          <p>{description}</p>
        </button>
      </a>
    </div>
  );
};

Project.propTypes = {
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Project;
