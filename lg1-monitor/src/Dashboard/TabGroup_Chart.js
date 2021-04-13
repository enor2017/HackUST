import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PeopleChart from './PeopleChart';

const TabGroup = () => (
  <div className="row">
    <div className="col-md-16">
      <div className="card">
        <div className="header">
          <h2 className="title">Forecast of People Density</h2>
        </div>
        <div className="content">
          <Tabs defaultActiveKey={1} id="plan-text-tabs">
            <Tab eventKey={1} title="Tab 1"><PeopleChart /></Tab>
            <Tab eventKey={2} title="Tab 2"><PeopleChart /></Tab>
            <Tab eventKey={3} title="Tab 3"><PeopleChart /></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
);

export default TabGroup;