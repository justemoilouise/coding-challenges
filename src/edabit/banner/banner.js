import * as React from 'react';
import * as styles from './banner.module.css';
import classNames from 'classnames';
import { Parallax } from 'react-scroll-parallax';

export const EdabitBanner = () => (
  <div className={classNames(styles.container)}>
    <Parallax speed={-15}>
      <a href='https://edabit.com/challenges'>
        <h2 className={styles.heading}>Edabit</h2>
      </a>
    </Parallax>
  </div>
);
