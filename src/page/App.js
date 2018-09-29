import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom'
import RouteConfig from '../router/index'
import Loadable from 'react-loadable';
import Loading from '../components/load'
import '../styles/app/App.css';

const App = () => (
  <div>
    <Route exact path={"/"} component={()=> <p>/</p>} />
    <Route path={"/activity"} component={ Loadable({
        loader: () => import("./activity/activity"),
        loading: Loading
    })} />
  </div>
)

export default App
