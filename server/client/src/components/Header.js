import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="defaultAuth">
            <Link to="/auth/default">Login</Link>
          </li>,
          <li key="googleAuth">
            <a href="/auth/google">Login with Google</a>
          </li>,
          <li key="facebookAuth">
            <a href="/auth/facebook">Login with Facebook</a>
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
      <div>
        <ul className="right dropdown-content" id="dropdown1">
          {this.renderContent()}
        </ul>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? '/campaigns' : '/'}
              className="left brand-logo"
            >
              Holocron
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  Login
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
