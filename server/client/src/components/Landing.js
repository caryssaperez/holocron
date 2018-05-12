import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    return <div>Form or campaigns here.</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
