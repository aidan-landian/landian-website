import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = ({ siteTitle }) => (
  <Navbar expand="lg" fixed="top "className="navbar-dark" id="mainNav">
  
      <Navbar.Brand href="/" className="text-uppercase" >{ siteTitle }</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse >
        <Nav className="t
          
          ext-uppercase justify-content-right">
        <Nav.Item>
            <Nav.Link href="/" >Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
)

NavigationBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavigationBar.defaultProps = {
  siteTitle: ``,
}

export default NavigationBar
