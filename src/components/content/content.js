import * as React from 'react';
import * as styles from './content.module.css';

export const Content = ({ children }) => (
  <main className={styles.container}>
    {children}
  </main>
);
