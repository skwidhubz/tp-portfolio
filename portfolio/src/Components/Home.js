import React from 'react'
import img_tom from '../Images/portrait_new.png';
import '../Styles/home.css';

const Home = () => {
    return (
        <>
        <div className='home-container'>
            <p className='home-heading'>
            Tom Parker: Full-Stack Coding
            </p>
            <img src={img_tom} className='home-image' alt='professional portrait of a man with a beard and black shirt'/>
            <br/>
            <div className='home-biotext'>
                <p>
                I love to code! Wether it's building from scratch, refactoring or going on a mission to debug, all of it is fascinating to me.  
                </p>
                <p>
                My personal development projects are a blend of creativity and functionality and I am always eager to learn new languages or protocols. 
                </p>
            </div>
        </div>
        </>
    )
}

export default Home;

