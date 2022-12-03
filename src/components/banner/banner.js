import * as React from 'react';
import * as styles from './banner.module.css';
import classNames from 'classnames';
import { Parallax } from 'react-scroll-parallax';

export const Banner = ({ bgColor, logo, link, title }) => (
  <div style={{ "--bannerBgColor1": bgColor[0], "--bannerBgColor2": bgColor[1] }} className={classNames(styles.container)}>
    <Parallax speed={-15}>
      {logo && (
        <img src={logo} className={styles.logo} alt='' />
      )}
      <a href={link}>
        <h2 className={styles.heading}>{title}</h2>
      </a>
    </Parallax>
  </div>
);
