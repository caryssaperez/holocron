import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpForm from './auth/SignUpForm';

class Landing extends Component {
  render() {
    return (
      <div>
        <SignUpForm />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
