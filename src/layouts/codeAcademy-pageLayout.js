import * as React from 'react';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { PageLayout } from './pageLayout';

export const CodeAcademyPageLayout = ({ breadcumbItems, title, description, children }) => (
  <PageLayout>
    <Breadcrumbs items={breadcumbItems} />
    {title && <h3>{title}</h3>}
    {description && <p>{description}</p>}
    {children}
  </PageLayout>
);
