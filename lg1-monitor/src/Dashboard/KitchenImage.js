import React from 'react';
import kitchen_img from '../assets/images/kitchen_img.jpeg';

const KitchenImage = () => (
    <div className="card-header">
      <p>Updated at 12:24 pm</p>
      <p>This kitchen image is from the internet.</p>
      <img src = {kitchen_img} alt = "Kitchen Image" height = "430px"></img>
    </div>
);

export default KitchenImage;