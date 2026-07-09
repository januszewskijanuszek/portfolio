import './home.css'
import SocialLink from './SocialLink';
import {FaLinkedinIn, FaGithub, FaFacebook} from 'react-icons/fa';
import { IoMailSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

function Home(){
return(
    <section className='home-section'>
        <nav className='home-nav'>
            <img className='nav-logo' src='../public/profile-picture.png'/>
            {/* <div className='nav-logo'>△</div> */}
            <div className='nav-menu'>☰</div>
        </nav>
        <div className='master-container'>
            <main className='home-content'>
                <h2 className='home-greeting'>Hello 👋</h2>
                <h1 className='home-name-title'>I'm Patryk Januszewski</h1>
                <p className='home-tagline'>
                    Silicon Firmware Development Engineer
                    <span className='typing-cursor'>|</span>
                </p>
                <div className='home-social-links'>
                    <SocialLink icon={FaLinkedinIn} href='#' label={"LinkedIn"} />
                    <SocialLink icon={FaGithub} href='#' label={"LinkedIn"} />
                    <SocialLink icon={FaFacebook} href='#' label={"LinkedIn"} />
                    <SocialLink icon={IoMailSharp} href='#' label={"LinkedIn"} />
                </div>
                <div className='home-action-buttons'>
                    <div className='resume-button'>Resume</div>
                    <div className='more-button'>More about me</div>
                </div>
            </main>
        </div>
    </section>
    );
}

export default Home;