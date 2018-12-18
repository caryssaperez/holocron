import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header/HeaderBar';
import Landing from './Landing';
import * as actions from '../actions';
import SignUpForm from './auth/SignUpForm';
import LoginForm from './login/LoginForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route path="/signup" component={SignUpForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/" component={Landing} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App);
