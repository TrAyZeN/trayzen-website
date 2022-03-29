import './style.scss';

import RustLogo from '../../assets/rust.svg';
import CLogo from '../../assets/c.svg';
import CSharpLogo from '../../assets/csharp.svg';
import NodeJsLogo from '../../assets/nodejs.svg';
import ReactLogo from '../../assets/react.svg';
import SassLogo from '../../assets/sass.svg';
import MongoDbLogo from '../../assets/mongodb.svg';
import RedisLogo from '../../assets/redis.svg';
import DockerLogo from '../../assets/docker.svg';

type Props = {
  name: string;
  date: string;
  link?: string;
  image: JSX.Element;
  technologies?: Technology[];
  description: string;
};

const defaultProps = {
  link: 'https://github.com/trayzen',
  technologies: [],
};

export enum Technology {
  Rust,
  C,
  CSharp,
  NodeJs,
  React,
  Sass,
  MongoDb,
  Redis,
  Docker,
}

// TODO: Change string to enum
const technologyLogos = new Map<Technology, JSX.Element>([
  [
    Technology.Rust,
    <img src={RustLogo} alt="C language" width="60" height="60" />,
  ],
  [
    Technology.C,
    <img src={CLogo} alt="Rust language" width="60" height="60" />,
  ],
  [
    Technology.CSharp,
    <img src={CSharpLogo} alt="C# language" width="60" height="60" />,
  ],
  [
    Technology.NodeJs,
    <img src={NodeJsLogo} alt="Node.JS" width="60" height="60" />,
  ],
  [
    Technology.React,
    <img src={ReactLogo} alt="React.JS" width="60" height="60" />,
  ],
  [Technology.Sass, <img src={SassLogo} alt="Sass" width="60" height="60" />],
  [
    Technology.MongoDb,
    <img src={MongoDbLogo} alt="MongoDB" width="60" height="60" />,
  ],
  [
    Technology.Redis,
    <img src={RedisLogo} alt="Redis" width="60" height="60" />,
  ],
  [
    Technology.Docker,
    <img src={DockerLogo} alt="Docker" width="60" height="60" />,
  ],
]);

const Project = (props: Props) => {
  const { name, date, link, image, technologies, description } =
    props as Props & typeof defaultProps;

  return (
    <div className="project">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          {image}
          <div className="overlay">
            <div className="logo-container">
              {technologies.map((technology) =>
                technologyLogos.get(technology),
              )}
            </div>
            <p style={{ color: 'white' }}>Click to learn more ;)</p>
          </div>
        </div>
      </a>
      <p className="description">{description}</p>
    </div>
  );
};
Project.defaultProps = defaultProps;

export default Project;
