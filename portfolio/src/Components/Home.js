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
                I have a strong foundation in programming languages such as HTML, CSS, JavaScript, Node.js and React. I am passionate about web development, security and learning new technologies.
                </p>
                <p>
                I thrive in team environment and enjoy collaborating with other people to solve complex problems, deliver projects on time and am always seeking to improve my skills.
                </p>
            </div>
        </div>
        </>
    )
}

export default Home;
