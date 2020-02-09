import React from 'react';
import './style.scss';

function Social(props) {
  return (
    <div className="Social">
      <a href={props.href}>
        <img src={props.src}
            className="Social-icon"
            alt="icon" />
      </a>
    </div>
  );
}

export default Social;
