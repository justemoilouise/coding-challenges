import * as React from 'react';
import * as styles from './breadcrumbs.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Breadcrumbs = ({ items = [] }) => {
  if (items.length <= 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      {items.map((it, index) => {
        if (it.link) {
          return (
            <p key={index} className={styles.breadcrumbItem}>
              <Link to={it.link}>{it.label}</Link>
              <FontAwesomeIcon className={styles.icon} icon={faChevronRight} size='2xs' />
            </p>
          );
        }
        return (
          <p key={index} className={styles.breadcrumbItem}>
            {it.label}
          </p>
        );
      })}
    </div>
  );
};
