import * as React from 'react';
import * as styles from './breadcrumbs.module.css';
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
            <>
              <a key={index} href={it.link} className={styles.breadcrumbItem}>
                {it.label}
              </a>
              &nbsp;
              <FontAwesomeIcon icon={faChevronRight} size='2xs' />
              &nbsp;
            </>
          )
        }
        return it.link
          ? (<a key={index} href={it.link} className={styles.breadcrumbItem}>{it.label}</a>)
          : (<p key={index} className={styles.breadcrumbItem}>{it.label}</p>);
      })}
    </div>
  );
};
