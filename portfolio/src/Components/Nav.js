import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/navbar.css';



function Navigation() {

  const tomResume = 'https://docs.google.com/document/d/1M_bwVmEvrHat0LGX5rZD1Z7XyLHRP7tkhVr2HEmRVEk/edit?usp=sharing';

  return (
    <Navbar className='nav-container' expand="lg">
      <Container>

        <Navbar.Brand href="/" className='nav-heading'>TMP-IT 💻</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <NavDropdown title="Info" id="basic-nav-dropdown">
              <NavDropdown.Item href={tomResume} target="_blank" rel="noopener noreferrer">Resume</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/skwidhubz/" target="_blank">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/tom-parker-82608b13a/" target="_blank">LinkedIn</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;