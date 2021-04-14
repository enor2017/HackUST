import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => (
    <Navbar fluid={true}>

      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown title="Account" id="right-nav-bar">
            <MenuItem>
              <Link to="/">
                Settings
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/order-history">
                Order History
              </Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem>
              <Link to="/">
                Logout
              </Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

export default Header;