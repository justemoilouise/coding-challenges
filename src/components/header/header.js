import * as React from 'react';
import * as styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DrawerToggle } from '../drawer/drawer-toggle';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.toggleHeading}>
        <DrawerToggle />
        <h1 className={styles.heading}>
          Playground
        </h1>
      </div>
      <a href='https://github.com/justemoilouise/vercel-gatsby/' className={styles.githubLink}>
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
    </header>
  );
};
