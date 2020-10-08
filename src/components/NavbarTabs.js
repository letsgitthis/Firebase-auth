import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavbarTabs() {

  const location = useLocation();

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Craft Space</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/signuppage" className={location.pathname === "/signuppage" ? "nav-link active" : "nav-link"} >Login/Register</Link>
          <Link to="/homepage" className={location.pathname === "/homepage" ? "nav-link active" : "nav-link"} >Home</Link>
          <Link to="/randompage" className={location.pathname === "/randompage" ? "nav-link active" : "nav-link"} >Random</Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default NavbarTabs;