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
                <p className="meau-p">Settings</p>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/order-history">
                <p className="meau-p">Order History</p>
              </Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem>
              <Link to="/">
                <p className="meau-p">Logout</p>
              </Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

export default Header;