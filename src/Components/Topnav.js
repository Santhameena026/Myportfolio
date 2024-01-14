import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './topnav.css';

const Topnav = () => {
  return (
    <div>
    <Navbar expand="lg" className="bgcolor fixed-top">
      <Container>
        <Navbar.Brand href="#home" className='portfolio'>PORT<span className='folio'>FOLIO</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='navborder' style={{color:"aqua", fontWeight:"600",fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link href="#aboutme" className='navborder' style={{color:"aqua", fontWeight:"600",fontSize:"20px"}}>About Me</Nav.Link>
            <Nav.Link href="#experience" className='navborder' style={{color:"aqua", fontWeight:"600",fontSize:"20px"}}>Experience</Nav.Link>
            <Nav.Link href="#myskills" className='navborder' style={{color:"aqua", fontWeight:"600",fontSize:"20px"}}>Skills</Nav.Link>
            <Nav.Link href="#latestwork" className='navborder' style={{color:"aqua", fontWeight:"600",fontSize:"20px"}}>Latest works</Nav.Link>
            <Nav.Link href="#contact" className='navborder' style={{color:"aqua", fontWeight:"600",fontSize:"20px"}}>contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Topnav