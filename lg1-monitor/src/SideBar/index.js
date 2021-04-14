import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Nav from './Nav';

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar">
        
        <div className="brand">
          <a href="" className="brand-name">
            LG1 Monitor
          </a>
        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <Nav />
        </div>
      </div>
    )
  }
}

export default SideBar;