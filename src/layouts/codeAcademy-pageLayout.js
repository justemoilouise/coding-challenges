import * as React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Banner } from '../components/banner/banner';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { PageLayout } from './pageLayout';

export const CodeAcademyPageLayout = ({ breadcumbItems, title, description, link, children }) => (
  <PageLayout>
    <Breadcrumbs items={breadcumbItems} />
    <Banner
      bgColor={['beige', 'rgb(58, 16, 229)']}
      logo='/assets/logo-codeacademy.svg'
      link='https://www.codecademy.com/code-challenges'
      title='Code Academy'
    />
    {title && <h3>{title}</h3>}
    {description && (
      <p>
        <span dangerouslySetInnerHTML={{ __html: description }} />
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
