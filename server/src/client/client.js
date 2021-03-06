import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import reducers from './reducers/index';
import Routes from './Router';

const axiosInstance = axios.create({
  baseURL: "/api"
})


const enhancers = [];
const middlewares = [
  thunk.withExtraArgument(axiosInstance),
  logger
]



const store = createStore( 
  reducers, 
  window.INITIAL_STATE, 
  compose( applyMiddleware(...middlewares), ...enhancers ) 
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

