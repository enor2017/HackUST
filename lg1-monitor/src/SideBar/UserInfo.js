import React, { Component } from 'react';
import avatar_img from '../assets/images/default-avatar.png'

class UserInfo extends Component {
  render() {
    return (
      <div className="user-wrapper">
        <div className="user">
          <img src={avatar_img} alt={"Demo User"} className="photo" />
          <div className="userinfo">
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