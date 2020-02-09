import React from 'react';
import './style.scss';

import SocialIcon from '../SocialIcon';

import github from '../../assets/github.svg';
import mail from '../../assets/mail.png';

function Social() {
    return (
      <div className="Social">
        <SocialIcon link="mailto:lbenitoproduction@gmail.com"
                    src={mail} />

        <SocialIcon link="https://github.com/TrAyZeN"
                    src={github} />
        <button>Resume</button>
      </div>
    );
}

export default Social;
