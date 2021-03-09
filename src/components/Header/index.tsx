import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'

const Header: React.FC = () => {
  return (
    <>
      <header>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="#home">
            <Image src="images/logo.png" alt="Logo Nagoya" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Commander" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">À emporter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">En livraison</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">{`Carte & Menu`}</Nav.Link>
              <Nav.Link href="#link">{`Galerie`}</Nav.Link>
              <Nav.Link href="#link">{`Contact`}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <style jsx global>
        {`
          header {
            position: fixed;
            top: 0;
            z-index: 999;
            width: 100%;
          }
          header .navbar {
            height: 70px;
            padding: 8px 20px;
            z-index: 2;
            font-size: 18px;
            font-family: 'Poppins';
          }
          header .navbar .navbar-brand {
            height: 100%;
          }
          header .navbar .navbar-brand img {
            height: 100%;
          }
          header .navbar .navbar-nav .dropdown-toggle::after {
            display: none;
          }
          header .navbar .navbar-nav .nav-link {
            color: #1c1c1c;
          }
        `}
      </style>
    </>
  )
}

export default Header
