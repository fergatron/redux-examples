import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './src/app';
import appReducer from './src/reducers';

const storeWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(appReducer)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
