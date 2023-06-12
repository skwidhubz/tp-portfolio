import React from 'react'
import img_tom from '../Images/tom_photo_small.jpg';
import '../Styles/home.css';

const Home = () => {
    return (
        <>
        <div className='home-container'>
            <p className='home-heading'>
            Tom Parker: Full-Stack Coding
            </p>
            <img src={img_tom} className='home-image'/>
            <br/>
            <div className='home-biotext'>
                <p>
                I have a strong foundation in programming languages such as HTML, CSS, JavaScript, Node.js and React. I am passionate about web development, security and learning new technologies.
                </p>
                <p>
                I am a team player and enjoy collaborating with other developers to solve complex problems. deliver projects on time and am always seeking to improve my skills.
                </p>
            </div>
        </div>
        </>
    )
}

export default Home;
