import React, {useState, useEffect} from 'react';

import './home.css'
import SocialLink from './SocialLink';
import ImageButton from '../utils/ImageButton';

import {FaLinkedinIn, FaGithub, FaFacebook} from 'react-icons/fa';
import { IoMailSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Home(){
    const fullText = "Silicon Firmware Development Engineer";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); 
        return () => clearInterval(typingInterval);
    }, []);

    const coloredPart = displayedText.slice(0, 16);
    const regularPart = displayedText.slice(16);

return(
    <section className='home-section'>
        <nav className='home-nav'>
            <img className='nav-logo' src='../public/profile-picture.png'/>
            <div className='nav-content'>
                <div className='nav-element'>Temp</div>
                <div className='nav-element'>Temp1</div>
                <div className='nav-element'>Temp2</div>
                <div className='nav-element'>Temp3</div>
                {/* <div className='nav-menu'>☰</div> */}
            </div>
        </nav>
        <div className='master-container'>
            <main className='home-content'>
                <h2 className='home-greeting'>Hello 👋</h2>
                <h1 className='home-name-title'>I'm Patryk Januszewski</h1>
                <p className='home-tagline'>
                    <span style={{ color: '#2b95ce' }}>{coloredPart}</span>
                        {regularPart}
                    <span className='typing-cursor' style={{ color: '#2b95ce' }}>|</span>
                </p>
                <div className='home-second-stage'>
                    <p className='home-description'>
                        Silicon Firmware Development Engineer with <span style={{ color: '#2b95ce' }}>3 year experience</span> in firmware development specialized in C++ programming langage.
                    </p>
                    <div className='home-social-links'>
                        <SocialLink icon={FaLinkedinIn} href='https://www.linkedin.com/in/patryk-januszew/' label={"LinkedIn"} />
                        <SocialLink icon={FaGithub} href='https://github.com/januszewskijanuszek' label={"Github"} />
                        <SocialLink icon={FaFacebook} href='https://www.facebook.com/patryk.januszewski.16' label={"Facebook"} />
                        <SocialLink icon={IoMailSharp} href='mailto:januszewskijanuszek@gmail.com' label={"Email"} />
                    </div>
                    <div className='home-action-buttons'>
                        <ImageButton 
                            Icon={FaFileDownload} 
                            text='Resume' 
                            label='Resume' 
                            href='../public/portfolio.pdf' 
                            download="resume.pdf" 
                        />
                        <div className='more-button'>More about me</div>
                        <ImageButton 
                            Icon={FaArrowLeft} 
                            text='' 
                            label='Show_next'
                        />
                        <ImageButton 
                            Icon={FaArrowRight} 
                            text='' 
                            label='Show_next'
                        />
                    </div>
                </div>
            </main>
            <div className='home-show-pannel'>
                <div>

                </div>
            </div>
        </div>
    </section>
    );
}

export default Home;