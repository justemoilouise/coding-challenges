import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { PageLayout } from './pageLayout';

export const CodeAcademyPageLayout = ({ breadcumbItems, title, description, link, children }) => (
  <PageLayout>
    <Breadcrumbs items={breadcumbItems} />
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
