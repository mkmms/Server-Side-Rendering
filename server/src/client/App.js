import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions'

import Header from './components/Header';

const App = ({route}) => {
  return (
    <div>
      <Header/>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <div className="row center">
            { renderRoutes(route.routes) }
          </div>
          <br/><br/>
        </div>
      </div>
    </div>
  )
}


export default {
  component: App,
  loadData: ( ({dispatch}) => dispatch( fetchCurrentUser() ) )
};