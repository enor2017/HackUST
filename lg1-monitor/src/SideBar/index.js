import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Nav from './Nav';

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar">
        
        <div className="brand">
          <a href="" className="brand-name">
            <h2>Just4Fun</h2>
          </a>
        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
      </div>
    )
  }
}

export default SideBar;