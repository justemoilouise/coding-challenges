import * as React from 'react';
import * as styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.container}>
    <a href='https://vercel.com/'>Powered by Vercel</a>
    &nbsp;|&nbsp;
    <span>Copyright &#169; 2022</span>
  </footer>
);
