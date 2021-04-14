import React from 'react';
import canteen_img from '../assets/images/canteen_img.JPG';

const CanteenImage = () => (
    <div className="card-header">
      <p>Updated at 12:20 pm</p>
      <img src = {canteen_img} alt = "Canteen Image" height = "430px"></img>
    </div>

);

export default CanteenImage;