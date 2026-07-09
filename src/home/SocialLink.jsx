import React from 'react';

import './socialLinks.css';

function SocialLink({icon: Icon, href, label}){
    return(
        <a href={href} target='_blank' className='social-icon' aria-label={label}>
            <Icon size={25}/>
        </a>
    )
}

export default SocialLink;