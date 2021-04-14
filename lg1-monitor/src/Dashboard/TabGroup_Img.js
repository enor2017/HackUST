import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CanteenImage from './CanteenImage';
import KitchenImage from './KitchenImage';

const TabGroup = () => (
  <div className="row">
    <div className="col-lg-16">
      <div className="card">
        <div className="header">
          <h2 className="title">Current Canteen Image</h2>
        </div>
        <div className="content">
          <Tabs defaultActiveKey={1} id="plan-text-tabs">
            <Tab eventKey={1} title="Canteen"><CanteenImage /></Tab>
            <Tab eventKey={2} title="Kitchen"><KitchenImage /></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
);

export default TabGroup;