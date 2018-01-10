import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// additional components
import logger from 'redux-logger';

// local components
import App from './src/app';
import appReducer from './src/reducers';

const storeWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeWithMiddleware(appReducer)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
