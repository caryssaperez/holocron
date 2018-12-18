import React from 'react';
import styles from './FormField.module.scss';

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} className={styles.input} type={type} />
      <div className={styles.errorField}>{touched && error}</div>
    </div>
  );
};
