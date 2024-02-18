import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
const NaveBare = () => {
  return (
    <div className="nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="/youtube-logo-0.png" alt="logo" className="logoYoutube" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex search">
              <Form.Control
                id="inpute"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <button variant="outline-success" className="btnSpecail">
                <CiSearch id="CiSearch" />
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NaveBare;
