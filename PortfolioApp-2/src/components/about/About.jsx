import React from 'react';
import './About.css';
import Image from '../../assets/a.jpg';
import Resume from '../../assets/MyCv.pdf';
import AboutBox from './AboutBox';

// Importing local SVG icons
import jsIcon from '../../assets/icons/js.svg';
import tsIcon from '../../assets/icons/ts.svg';
import reactIcon from '../../assets/icons/react.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import postgresIcon from '../../assets/icons/postgres.svg';
import nestjsIcon from '../../assets/icons/nestjs.svg';
import expressIcon from '../../assets/icons/express.svg';
import mongodbIcon from '../../assets/icons/mongodb.svg';
import phpIcon from '../../assets/icons/php.svg';
import nextjsIcon from '../../assets/icons/nextjs.svg';
import githubIcon from '../../assets/icons/github.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            <span className="colored-word">• Sit</span> Hello! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas tempora quia nisi perspiciatis atque, voluptatibus, adipisci consequuntur aliquam mollitia iste sunt minima aliquid hic recusandae facere incidunt alias! Quos?<br /><br />
                            <span className="colored-word">• Sit</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo labore ad dolorum cupiditate harum pariatur sunt recusandae dolorem, maiores nemo molestiae exercitationem assumenda, sit eos deserunt quisquam corrupti excepturi quaerat.<br /><br />
                            <span className="colored-word">• Sit</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis sunt nobis magni doloribus:
                        </p>
                        <ul className="about__list">
    <li>
        <b>JavaScript -</b> 
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <img src={jsIcon} alt="JavaScript" />
        </a>
    </li>
    <li>
        <b>TypeScript -</b> 
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            <img src={tsIcon} alt="TypeScript" />
        </a>
    </li>
    <li>
        <b>React -</b> 
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={reactIcon} alt="React" />
        </a>
    </li>
    <li>
        <b>Node.js -</b> 
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
            <img src={nodejsIcon} alt="Node.js" />
        </a>
    </li>
    <li>
        <b>Postgres SQL -</b> 
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
            <img src={postgresIcon} alt="Postgres SQL" />
        </a>
    </li>
    <li>
        <b>NestJS -</b> 
        <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">
            <img src={nestjsIcon} alt="NestJS" />
        </a>
    </li>
    <li>
        <b>Express -</b> 
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
            <img src={expressIcon} alt="Express" />
        </a>
    </li>
    <li>
        <b>MongoDB -</b> 
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
            <img src={mongodbIcon} alt="MongoDB" />
        </a>
    </li>
    <li>
        <b>Php -</b> 
        <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
            <img src={phpIcon} alt="PHP" />
        </a>
    </li>
    <li>
        <b>Next.js -</b> 
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={nextjsIcon} alt="Next.js" />
        </a>
    </li>
    <li>
        <b>GitHub -</b> 
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
        </a>
    </li>
    <li>
        <b>WordPress -</b> 
        <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
            <img src={wordpressIcon} alt="WordPress" />
        </a>
    </li>
</ul>

                        <hr className="line-hr" />
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;
