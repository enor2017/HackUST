import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import icon from '../assets/images/dashboard-icon.png';


class Nav extends Component {

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <img src={icon} alt="Dashboard Icon" width="20px"></img>
            &nbsp; &nbsp; <strong>Dashboard</strong>
          </Link>
        </li>
        <li className={this.isPathActive('/order-history') ? 'active' : null}>
          <Link to="/order-history">
            <img src={icon} alt="History Icon" width="20px"></img>
            &nbsp; &nbsp; <strong>Order History</strong>
          </Link>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);