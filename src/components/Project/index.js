import React from 'react';
import fetch from 'node-fetch';
import './style.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      description: "",
      html_url: ""
    };

    this.parseRepo();
  }

  parseRepo() {
    fetch(`https://api.github.com/repos/TrAyZeN/${this.state.name}`)
      .then(response => response.json())
      .then(response => this.setState(response));
  }

  render() {
    return (
      <div className="Project">
        <button onClick={() => window.location = this.state.html_url}>
          <h2>{this.state.name}</h2>
          <p>{this.state.description}</p>
        </button>
      </div>
    );
  }
}

export default Project;