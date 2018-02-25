import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Login from './login/Login';
import Main from './main/Main';
import store from './store';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className='App'>
            {/* <Route path='/login' component={Login} /> */}
            <Route path='/' component={Main} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
