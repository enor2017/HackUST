import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PeopleChart from './PeopleChart';

const TabGroup = () => (
  <div className="row">
    <div className="col-lg-16">
      <div className="card">
        <div className="card-header">
          <h2>Forecast of People Density</h2>
        </div>
        <div className="card-content">
          <Tabs defaultActiveKey={1} id="plan-text-tabs">
            <Tab eventKey={1} title="Today 12:20"><PeopleChart value="1" /></Tab>
            <Tab eventKey={2} title="Today 12:40"><PeopleChart value="2" /></Tab>
            <Tab eventKey={3} title="Today 13:00"><PeopleChart value="3" /></Tab>
          </Tabs>
          <p className="card-footer">"Est." means some data are estimated using our program.</p>
        </div>
      </div>
    </div>
  </div>
);

export default TabGroup;