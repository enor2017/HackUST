import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => (
    <Navbar fluid={true}>

      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown title="Account" id="right-nav-bar">
            <MenuItem>Settings</MenuItem>
            <MenuItem>
              <Link to="/order-history">
                Order History
              </Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

export default Header;