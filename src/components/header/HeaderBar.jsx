import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './HeaderBar.module.scss';
import items from './menu/menuItems';
import MenuItem from './menu/MenuItem';

class HeaderBar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return items['signedOut'].map(item => (
          <MenuItem key={item.name} item={item} />
        ));
      default:
        return items['signedIn'].map(item => (
          <MenuItem key={item.name} item={item} />
        ));
    }
  }

  render() {
    return (
      <nav>
        <div className={styles.header}>
          <Link to={this.props.auth ? '/arcs' : '/'} className={styles.logo}>
            Vanguard
          </Link>
          <ul className={styles.menu}>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(HeaderBar);
