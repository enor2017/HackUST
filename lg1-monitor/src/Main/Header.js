import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => (
    <Navbar fluid={true}>

      <Navbar.Collapse>

        <div className="separator"></div>
        
        <Nav pullRight>
          <NavDropdown title="Account" id="right-nav-bar">
            <MenuItem>Settings</MenuItem>
            <MenuItem>Order History</MenuItem>
            <MenuItem divider />
            <MenuItem>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

export default Header;