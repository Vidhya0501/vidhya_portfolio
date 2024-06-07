import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll'

function Topbar() {
  return (
    <>
    <Navbar expand="lg" className="bg-dark fs-5 pe-5 d-flex justify-content-between fixed-top" variant="dark">
      <Container fluid>
        <div className="logo">
        <Navbar.Brand href="#" className='text-orange fw-bold fst-italic ps-2 fs-4'>Vidhya</Navbar.Brand>
        </div>
        
        <div className="menu">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          <Link className="nav-link text-light" activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={50}>Home</Link>
          <Link className="nav-link text-light" to="skills" spy={true} smooth={true} duration={500} offset={50}>Skills</Link>
          <Link className="nav-link text-light" to="projects" spy={true} smooth={true} duration={500} offset={50}>Projects</Link>
          <Link className="nav-link text-light" to="contact" spy={true} smooth={true} duration={500} offset={50}>Contact</Link>
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </>
  )
}

export default Topbar
