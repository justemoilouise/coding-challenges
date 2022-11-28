import * as React from 'react';
import * as styles from './content.module.css';
import classNames from 'classnames';

export const Content = ({ className, children }) => (
  <main className={classNames(styles.container, className)}>
    {children}
  </main>
);
