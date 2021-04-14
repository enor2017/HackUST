import React from 'react';
import CanteenImage from '../assets/images/canteen_img.JPG';


const PeopleChart = () => (
  <div className="card">
    <div className="content">
      <img src={CanteenImage} height="400px"></img>
    </div>
    <div className="footer">
      <hr />
      <div className="stats">
        <i className="fa fa-history"></i> Updated 3 minutes ago
          </div>
    </div>
  </div>
);

export default PeopleChart;