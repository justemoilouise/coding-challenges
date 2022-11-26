import * as React from 'react';
import * as styles from './header.module.css';

export const Header = ({ pageTitle }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{pageTitle}</h1>
    </div>
  );
};
