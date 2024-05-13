import Carousel from 'react-bootstrap/Carousel';
import img_poly from '../Images/polyflow-tile.png';
import img_pow from '../Images/pownft-tile.png';
import img_quiz from '../Images/quiz-tile.png';
import img_bot from '../Images/tile-chatbot.png';
import '../Styles/projects.css';

function Projects() {
  return (
    <div className='projects-container'> 
      {/* <span className="projects-header">PROJECTS</span> */}

      <div className="project-box">
        <img
          className="img-projects d-block w-100"
          src={img_pow}
          alt="powNFT tile"
        />
        <div className='carousel-text'>
          <a href='https://www.pownft.com/collection'><h3>powNFT</h3></a>
          <p>The worlds first mineable NFT.</p>
          <p>(Development and coding of music generation in JS) </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;