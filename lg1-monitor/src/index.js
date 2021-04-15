import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './assets/styles/mybutton.css';
import './assets/styles/footer.css';
import './assets/styles/table.css';
import './assets/styles/card.css';
import './assets/styles/fonts.css';
import './assets/styles/header.css';
import './assets/styles/sidebar.css';
import Main from './Main';

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('root')
);



