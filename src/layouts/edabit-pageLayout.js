import * as React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Banner } from '../components/banner/banner';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { PageLayout } from './pageLayout';

export const EdabitPageLayout = ({ breadcumbItems, title, description, link, children }) => (
  <PageLayout>
    <Breadcrumbs items={breadcumbItems} />
    <Banner
      bgColor={[ 'beige', 'rgb(45, 184, 75)' ]}
      link='https://edabit.com/challenges'
      title='Edabit'
    />
    {title && <h3>{title}</h3>}
    {description && (
      <p>
        {description}
        {link && (
          <>
            &nbsp;
            <a href={link}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' />
            </a>
          </>
        )}
      </p>
    )}
    {children}
  </PageLayout>
);
