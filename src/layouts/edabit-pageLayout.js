import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { EdabitBanner } from '../edabit/banner/banner';
import { PageLayout } from './pageLayout';

export const EdabitPageLayout = ({ breadcumbItems, title, description, link, children }) => (
  <PageLayout>
    <Breadcrumbs items={breadcumbItems} />
    <EdabitBanner />
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
