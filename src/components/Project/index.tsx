import './style.scss';

import KicadLogo from '../../assets/kicad.png';

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
  Ansible,
  Vagrant,
  Kicad,
}

// Directly importing SVG assets results in an error from svgr so putting them
// in public directory as a workaround.
const technologyLogos = new Map<Technology, JSX.Element>([
  [
    Technology.Rust,
    <img
      src={`${process.env.PUBLIC_URL}/svg/rust.svg`}
      alt="Rust language"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.C,
    <img
      src={`${process.env.PUBLIC_URL}/svg/c.svg`}
      alt="C language"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.CSharp,
    <img
      src={`${process.env.PUBLIC_URL}/svg/csharp.svg`}
      alt="C# language"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.NodeJs,
    <img
      src={`${process.env.PUBLIC_URL}/svg/nodejs.svg`}
      alt="Node.JS"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.React,
    <img
      src={`${process.env.PUBLIC_URL}/svg/react.svg`}
      alt="React.JS"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.Sass,
    <img
      src={`${process.env.PUBLIC_URL}/svg/sass.svg`}
      alt="Sass"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.MongoDb,
    <img
      src={`${process.env.PUBLIC_URL}/svg/mongodb.svg`}
      alt="MongoDB"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.Redis,
    <img
      src={`${process.env.PUBLIC_URL}/svg/redis.svg`}
      alt="Redis"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.Docker,
    <img
      src={`${process.env.PUBLIC_URL}/svg/docker.svg`}
      alt="Docker"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.Ansible,
    <img
      src={`${process.env.PUBLIC_URL}/svg/ansible.svg`}
      alt="Ansible"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.Vagrant,
    <img
      src={`${process.env.PUBLIC_URL}/svg/vagrant.svg`}
      alt="Vagrant"
      width="60"
      height="60"
      loading="lazy"
    />,
  ],
  [
    Technology.Kicad,
    <img src={KicadLogo} alt="Kicad" width="60" height="60" loading="lazy" />,
  ],
]);

const Project = (props: Props): JSX.Element => {
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
              {technologies.map((technology) => (
                <div key={technology}>{technologyLogos.get(technology)}</div>
              ))}
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
