import React from 'react'
import img_tom from '../Images/portrait_new.png';
import img_alt from '../Images/ponder_profile.jpg';
import '../Styles/home.css';

const Home = () => {
    return (
        <>
        <div className='home-container'>
            <p className='home-heading'>
            Tom Parker: Full-Stack Coding & Cyber Security
            </p>
            <img src={img_alt} className='home-image' alt='professional portrait of a man with a beard and black shirt'/>
            <br/>
            <div className='home-biotext'>
                <p>
                Wether it's in construction, coding, running events or everyday life, I love to engineer solutions to problems!  
                </p>
                <p>
                For many years I dreamt of working within computer systems and code, and now I am working toward a lifelong career in cyber security and software/web development.
                </p>
                <p>
                My personal development projects are a blend of creativity and functionality and I am always eager to learn new skills, languages or protocols. 
                </p>
            </div>
        </div>
        </>
    )
}

export default Home;

