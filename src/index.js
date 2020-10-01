import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import  App  from './components/App';
import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar';
import Slack from './components/Slack';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

