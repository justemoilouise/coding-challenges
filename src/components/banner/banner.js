import classNames from 'classnames';
import * as React from 'react';
import * as styles from './banner.module.css';

export const Banner = ({ heading }) => (
  <div className={classNames(styles.container)}>
    <h2 className={styles.heading}>{heading}</h2>
  </div>
);
