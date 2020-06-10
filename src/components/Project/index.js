import React from 'react';
import fetch from 'node-fetch';
import './style.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);

    const { user, name } = props;
    this.state = {
      user,
      name,
      description: '',
      htmlUrl: '',
    };

    this.parseRepo(this.state);
  }

  parseRepo({ user, name }) {
    fetch(`https://api.github.com/repos/${user}/${name}`)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          response,
          htmlUrl: response.html_url,
        })
      );
  }

  render() {
    const { htmlUrl, name, description } = this.state;
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
  }
}

export default Project;
