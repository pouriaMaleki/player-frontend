import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Main from './Main';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='App'>
          <Route path='/login' component={Login} />
          <Route path='/main' component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
