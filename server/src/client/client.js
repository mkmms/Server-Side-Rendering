import React from 'react';
import { hydrate } from 'react-dom';
import Home from './components/Home';

const root = document.querySelector('#root')

hydrate(
  <Home/>,
  root
);

