import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/navbar.css';



function Navigation() {

  const tomResume = 'https://drive.google.com/file/d/1BysOQjAWFsNGJb8xq42TazrR2p0kT5NS/view?usp=sharing';

  return (
    <Navbar className='nav-container' expand="lg">
      <Container>

        <Navbar.Brand href="/" className='nav-heading'>TMP Coding 💻</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <NavDropdown title="Info" id="basic-nav-dropdown">
              <NavDropdown.Item href={tomResume} target="_blank" rel="noopener noreferrer">Resume</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/skwidhubz/" target="_blank">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/tom-parker-82608b13a/" target="_blank">LinkedIn</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;