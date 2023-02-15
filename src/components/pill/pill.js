import classNames from 'classnames';
import * as React from 'react';
import * as styles from './pill.module.css';

export const Pill = ({ variant, children }) => (
  <div
    className={classNames(styles.container, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
    })}
  >
    {children}
  </div>
);
