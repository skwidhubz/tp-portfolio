import Carousel from 'react-bootstrap/Carousel';
import img_poly from '../Images/polyflow-tile.png';
import img_pow from '../Images/pownft-tile.png';
import img_quiz from '../Images/quiz-tile.png';
import '../Styles/projects.css';

function Projects() {
  return (
    <div className='projects-container'> 
      <span className="projects-header">PROJECTS</span>
      <Carousel>
        <Carousel.Item>
          <img
            className="img-projects d-block w-100"
            src={img_poly}
            alt="polyflow"
          />
          <Carousel.Caption>
              <div className='carousel-text'>
              <h3>polyflow</h3>
              <p>Inspire curiosity and engage creativity</p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_pow}
            alt="powNFT tile"
          />

          <Carousel.Caption>
              <div className='carousel-text'>
              <h3>powNFT</h3>
              <p>The worlds first mineable NFT</p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_quiz}
            alt="quiz tile"
          />

          <Carousel.Caption>
              <div className='carousel-text'>
                  <h3>Coding Quiz</h3>
                  <p>
                      A web based coding quiz in vanilla JS.
                  </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;