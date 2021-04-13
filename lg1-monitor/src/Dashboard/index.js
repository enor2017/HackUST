import React from 'react';
import QrCode from './QrCode';
import CanteenImage from './CanteenImage';
import TabGroup_Chart from './TabGroup_Chart';
import TabGroup_Img from './TabGroup_Img';

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <QrCode />
        </div>
        <div className="col-md-8">
          <TabGroup_Chart />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <TabGroup_Img />
        </div>
      </div>

    </div>
  </div>
);

export default Dashboard;