import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import dashicon from '../assets/images/dashboard-icon.png';
import histicon from '../assets/images/history-icon.png';


class Nav extends Component {

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'nav-active' : 'nav-inactive'}>
          <Link to="/">
            <img src={dashicon} alt="Dashboard Icon" width="20px"></img>
            &nbsp; &nbsp; <strong>Dashboard</strong>
          </Link>
        </li>
        <li className={this.isPathActive('/order-history') ? 'nav-active' : 'nav-inactive'}>
          <Link to="/order-history">
            <img src={histicon} alt="History Icon" width="20px"></img>
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