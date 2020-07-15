import React from 'react';
import ReactDOM from 'react-dom';


import AppApp from './App';
import AppRC from './AppRC';
import AppRCVirtualized from './AppRCVirtualized';

const App = AppRCVirtualized;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
