import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="googleAuth">
            <a href="/auth/google">Login with Google</a>
          </li>,
          <li key="facebookAuth">
            <a href="/auth/google">Login with Facebook</a>
          </li>
        ];
      default:
        return [
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/campaigns' : '/'}
            className="left brand-logo"
          >
            Holocron
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
