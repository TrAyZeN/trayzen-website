import React from 'react';
import './style.scss';

function Social(props) {
  return (
    <div className="Social">
      <a href={props.href}
         target="_blank"
         rel="noopener noreferrer">
        <img src={props.src}
             className="Social-icon"
             alt="icon" />
      </a>
    </div>
  );
}

export default Social;
