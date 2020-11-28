import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';

interface Repository {
  description: string;
  // eslint-disable-next-line camelcase
  html_url: string;
}

const getRepository = (user: string, name: string): Promise<Repository> =>
  new Promise((resolve, reject) => {
    axios
      .get<Repository>(`https://api.github.com/repos/${user}/${name}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

type Props = {
  user: string;
  name: string;
};

const Project: React.FC<Props> = ({ user, name }) => {
  const [description, setDescription] = useState('');
  const [htmlUrl, setHtmlUrl] = useState('');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    getRepository(user, name).then(({ description, html_url }) => {
      setDescription(description);
      setHtmlUrl(html_url);
    });
  }, []);

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

export default Project;
