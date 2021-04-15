import React, { Component } from 'react';
import avatar_img from '../assets/images/default-avatar.png'

class UserInfo extends Component {
  render() {
    return (
      <div className="user-wrapper">
        <div className="user-div">
          <img src={avatar_img} alt={"Demo User"} className="user-photo" />
          <div className="userinfo user-name">
            <div className="username">
              {"Demo User"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;