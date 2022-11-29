import * as React from 'react';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { PageLayout } from './pageLayout';

export const CodeAcademyPageLayout = ({ breadcumbItems, children }) => (
  <PageLayout>
    <Breadcrumbs items={breadcumbItems} />
    {children}
  </PageLayout>
);
