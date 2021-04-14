import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './assets/styles/index.scss';
import './assets/styles/mybutton.css';
import './assets/styles/footer.css';
import './assets/styles/table.css';
import Main from './Main';

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('root')
);



