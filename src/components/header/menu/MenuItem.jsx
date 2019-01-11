import React from 'react';
import styles from './MenuItem.module.scss';

const MenuItem = props => {
  const { name, href } = props.item;

  return (
    <li className={styles.item}>
      <a href={href}>{name}</a>
    </li>
  );
};

export default MenuItem;
