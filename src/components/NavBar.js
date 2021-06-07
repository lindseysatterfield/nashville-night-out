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
        <Link className="nav-link" to="/lets-eat">Let&apos;s Eat</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/add-restaurant">Add Restaurant</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/favorites">Favorites</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/all-restaurants">All Restaurants</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">&#10024; Nashville Night Out &#10024;</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          { user && authenticated()}
            {
              user !== null && <NavItem id="auth-buttons">
            {
              user
                ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
                : <Button color='info' onClick={signInUser}>Sign In</Button>
            }
              </NavItem> }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
