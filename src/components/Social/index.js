import React from 'react';
import './style.scss';

import SocialIcon from '../SocialIcon';

import github from '../../assets/github.png';
import mail from '../../assets/mail.png';

function Social() {
    return (
      <div className="Social">
        <SocialIcon link="mailto:lbenitoproduction@gmail.com"
                    src={mail} />

        <SocialIcon link="https://github.com/TrAyZeN"
                    src={github} />
      </div>
    );
}

export default Social;
