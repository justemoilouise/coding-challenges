import * as React from 'react';
import * as styles from './banner.module.css';
import classNames from 'classnames';
import { Parallax } from 'react-scroll-parallax';

export const CodeAcademyBanner = () => (
  <div className={classNames(styles.container)}>
    <Parallax speed={-15}>
      <a href='https://www.codecademy.com/code-challenges'>
        <img src='/assets/logo-codeacademy.svg' alt='' className={styles.logo} />
      </a>
      <h2 className={styles.heading}>Code Academy</h2>
    </Parallax>
  </div>
);
