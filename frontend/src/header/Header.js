import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import "./header.css";


const Header = () => {

    return (
      <div className="navDiv">
        <header>
          <Navbar collapseOnSelect className="top" expand="lg" variant="dark">
            <Container className="brandContainer">
                  <Navbar.Brand href="/">
                    <div className="brandName">Traveler</div>
                    </Navbar.Brand>
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