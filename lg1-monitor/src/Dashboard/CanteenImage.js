import React from 'react';
import CanteenImg from '../assets/images/canteen_img.JPG';

const CanteenImage = () => (
    <div className="card-header">
      <p>Updated at 12:20 pm</p>
      <img src = {CanteenImg} alt = "Canteen Image" height = "430px"></img>
    </div>

);

export default CanteenImage;