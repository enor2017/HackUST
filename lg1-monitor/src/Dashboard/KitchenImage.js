import React from 'react';
import kitchen_img from '../assets/images/kitchen_img.jpeg';

const KitchenImage = () => (
    <div className="card">
    <div className="header">
      <p className="category">Updated at 12:24 pm</p>
      <img src = {kitchen_img} alt = "Kitchen Image" height = "430px"></img>
      <p>This kitchen image is from the internet.</p>
    </div>
  </div>
);

export default KitchenImage;