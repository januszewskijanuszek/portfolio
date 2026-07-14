import React, {useState, useEffect} from 'react';

import './home.css'
import SocialLink from './SocialLink';
import ImageButton from '../utils/ImageButton';

import {FaLinkedinIn, FaGithub, FaFacebook, FaDiscord} from 'react-icons/fa';
import { IoMailSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Home(){
    const fullText = "Silicon Firmware Development Engineer";
    const [displayedText, setDisplayedText] = useState("");

    const portfolioItems = [
        { 
            src: '../public/intel.png', 
            description: 'Custom C++ Firmware for IoT smart home devices.' 
        },
        { 
            src: '../public/cool.jpg', 
            description: 'Custom C++ Firmware for IoT smart home devices.' 
        },
        { 
            src: '../public/images.jpg', 
            description: 'Optimized memory management system for embedded processors.' 
        },
        { 
            src: '../public/Trollface.png', 
            description: 'Real-Time Operating System (RTOS) integration project.' 
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [timer, setTimer] = useState(10000);
    const [displayedDescription, setDisplayedDescription] = useState('');
    const [descTypingDone, setDescTypingDone] = useState(false);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
        );
        setTimer(18000);
    }

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
        );
        setTimer(18000);
    };

    useEffect(() => {
        const fullDescription = portfolioItems[currentImageIndex].description;
        setDisplayedDescription('');
        setDescTypingDone(false);
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullDescription.length) {
                setDisplayedDescription(fullDescription.slice(0, i));
                i++;
            } else {
                setDescTypingDone(true);
                clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    useEffect(() => {
        const autoPlayTimeout = setTimeout(() => {
            // Move to next image
            setCurrentImageIndex((prevIndex) => 
                prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
            );
            setTimer(10000); 
        }, timer);

        // This clears the timer EVERY time the image index or timer state changes, 
        // which perfectly resets the countdown on manual clicks.
        return () => clearTimeout(autoPlayTimeout);
    }, [currentImageIndex, timer, portfolioItems.length]);

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
            </div>
        </nav>
        <div className='master-container'>
            <main className='home-content'>
                <div className='home-handle'>
                    <span className='handle-prompt'>&gt;</span> patryk_j
                    <span className='handle-accent'>// firmware_engineer.h</span>
                </div>
                <h1 className='home-name-title'>Patryk Januszewski</h1>
                <p className='home-tagline'>
                    <span style={{ color: '#2b95ce' }}>{coloredPart}</span>
                        {regularPart}
                    <span className='typing-cursor' style={{ color: '#2b95ce' }}>|</span>
                </p>
                <div className='home-meta-chips'>
                    <span className='meta-chip meta-chip--status'>
                        <span className='status-dot' /> Available for work
                    </span>
                    <span className='meta-chip'>Gdańsk, PL</span>
                    <span className='meta-chip'>C · C++ · Python</span>
                </div>
                <div className='home-second-stage'>
                    <p className='home-description'>
                        Silicon Firmware Development Engineer with <span style={{ color: '#2b95ce' }}>3 year experience</span> in firmware development specialized in C++ programming langage.
                    </p>
                    <div className='home-social-links'>
                        <SocialLink icon={FaLinkedinIn} href='https://www.linkedin.com/in/patryk-januszew/' label={"LinkedIn"} />
                        <SocialLink icon={FaGithub} href='https://github.com/januszewskijanuszek' label={"Github"} />
                        <SocialLink icon={FaFacebook} href='https://www.facebook.com/patryk.januszewski.16' label={"Facebook"} />
                        <SocialLink icon={FaDiscord} href='' label={"Discord"} />
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
                    </div>
                </div>
            </main>
            <div className='home-show-pannel'>
                <div className='panel-header'>
                    <div className='panel-lights'>
                        <span className='panel-light panel-light--red' />
                        <span className='panel-light panel-light--yellow' />
                        <span className='panel-light panel-light--green' />
                    </div>
                    <div className='panel-path'>~/portfolio/<span className='panel-path-accent'>{String(currentImageIndex + 1).padStart(2, '0')}</span>_of_{String(portfolioItems.length).padStart(2, '0')}</div>
                    <div className='panel-status'>LIVE</div>
                </div>
                <div className='home-graphic-window'>
                    <img 
                        key={currentImageIndex}
                        src={portfolioItems[currentImageIndex].src}
                        alt={`Present-${currentImageIndex + 1}`}
                        className='portfolio-image'
                    />
                </div>
                <div className='home-show-description'>
                    {displayedDescription}{!descTypingDone && <span className='typing-cursor' style={{ color: '#2b95ce' }}>|</span>}
                </div>
                <div className='home-button-swich'>
                    <ImageButton 
                        Icon={FaArrowLeft} 
                        text='' 
                        label='Show_next'
                        className='image-button-icon'
                        onClick={handlePrevImage}
                    />
                    <div className='carousel-dots'>
                        {portfolioItems.map((_, index) => (
                            <div 
                                key={index} 
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                style={index === currentImageIndex ? { '--progress-duration': `${timer}ms` } : undefined}
                                onClick={() => {
                                    setCurrentImageIndex(index);
                                    setTimer(18000);
                                }}
                            />
                        ))}
                    </div>
                    <ImageButton 
                        Icon={FaArrowRight} 
                        text='' 
                        label='Show_next'
                        className='image-button-icon'
                        onClick={handleNextImage}
                    />
                </div>
            </div>
        </div>
    </section>
    );
}

export default Home;