import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import "./header.css";


const Header = () => {

    return (
      <div className="navDiv">
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                  <Navbar.Brand href="/">Traveler</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Item className="buttonDiv"></Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
    );
};
  
  export default Header;