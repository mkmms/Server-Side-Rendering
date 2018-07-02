import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { renderRoutes } from 'react-router-config';

import reducers from './reducers/index';
import Routes from './Router';

const enhancers = [];
const middleware = [thunk, logger];

const store = createStore(
  reducers, 
  window.INITIAL_STATE, 
  compose(applyMiddleware(...middleware), ...enhancers)
);


const root = document.querySelector('#root')

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  root
);

