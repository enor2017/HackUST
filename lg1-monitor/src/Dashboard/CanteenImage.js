import React from 'react';
import canteen_img from '../assets/images/canteen_img.JPG';

const CanteenImage = () => (
    <div className="card">
    <div className="header">
      <p className="category">Updated at 12:20 pm</p>
      <img src = {canteen_img} alt = "Canteen Image" height = "430px"></img>
    </div>
  </div>
);

export default CanteenImage;