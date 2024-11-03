import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com' className='home__social-link' target='_blank'  rel='noreferrer'>
                <FaGithub size={25}/>
            </a>

            <a href='https://hashnode.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode size={25}/>
            </a>

            <a href='https://dev.to' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev size={25}/>
            </a>

            <a href='https://www.linkedin.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn size={25}/>
            </a>

            <a href='https://wwww.facebook.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF size={25}/>
            </a>

            <a href='https://www.twitter.com' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter size={25}/>
            </a>
        </div>
    );
};

export default HeaderSocials;
