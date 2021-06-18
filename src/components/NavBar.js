import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link text-light" to="/add-restaurant">Add Restaurant</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link text-light" to="/all-restaurants">All Restaurants</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link text-light" to="/favorites">Favorites</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link text-light" to="/lets-eat">Let&apos;s Eat</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar id="navbar" light expand="md">
        <NavbarBrand href="/" className="text-light brand">&#10024; Nashville Night Out &#10024;</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { user && authenticated()}
          </Nav>
          {
            user
              ? <Button color="secondary" onClick={signOutUser}>Sign Out</Button>
              : <Button color="secondary" onClick={signInUser}>Sign In</Button>
          }
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
