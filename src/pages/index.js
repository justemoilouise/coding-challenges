import * as React from 'react';
import { PageLayout } from '../layouts/pageLayout';

const IndexPage = () => {
  return (
    <PageLayout>
      Hello world!
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Hello world!</title>;
