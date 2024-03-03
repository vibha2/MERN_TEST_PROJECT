import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css';
import { Link } from 'react-router-dom';


function NavbarComponent() {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="md">
        <Container>
          <a href="/" className="logo-name">
            JWT-Auth
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             
            </Nav>
            {/* {isLoggedIn && user ? (
              <div
                className="icon-container initials-container"
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
              >
                {user?.firstName[0] + " " + user?.lastName[0]}

               
                {isMenuOpen && (
                  <div className="logout-menu">
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (*/}
              <Nav>
                <Nav.Link as={Link} to="/login" className="text-light">
                  Login
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  as={Link}
                  to="/sign-up"
                  className="text-light"
                >
                  Sign up
                </Nav.Link>
              </Nav>
            {/* )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent