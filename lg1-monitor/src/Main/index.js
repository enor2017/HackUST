import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from '../SideBar';

import Dashboard from '../Dashboard';

const Main = () => {
  return (
      <div className="wrapper">
        <SideBar />

        <div className="main-panel">
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Footer />
        </div>
      </div>
  )
};

export default Main;