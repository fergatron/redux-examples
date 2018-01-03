import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './src/app';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
