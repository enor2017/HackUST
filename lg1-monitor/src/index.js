import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './assets/styles/base.scss';
import 'sweetalert/dist/sweetalert.css';
import Main from './Main';

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('root')
);



