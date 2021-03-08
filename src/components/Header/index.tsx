import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header>
      <Navbar className={styles.navbar} bg="white" expand="lg">
        <Navbar.Brand href="#home">
          <Image src="assets/img/logo.png" alt="Logo Nagoya" height={50} />
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
  )
}

export default Header
