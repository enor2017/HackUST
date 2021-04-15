import React from 'react';
import img1220 from '../assets/images/1220.png';
import img1240 from '../assets/images/1240.png';
import img1300 from '../assets/images/1300.png';

function get_img(value){
    if(value === "1") return img1220;
    else if(value === "2") return img1240;
    else return img1300;
}

const PeopleChart = (props) => (
  <div>
    <div className="card-content">
      <img src={get_img(props.value)} height="400px"></img>
    </div>
  </div>
);

export default PeopleChart;