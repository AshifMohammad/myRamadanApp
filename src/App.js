import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from "history";

import Homepage from './components/Homepage';
import { Router, Switch, Route } from 'react-router-dom'


const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path='/'
            component={Homepage}
          />
          <Route
            exact
            path='/aboutus'
            component={Homepage}
          />
        </Switch>
      </Router>
      // <Homepage />
    );
  }
}

export default App;
