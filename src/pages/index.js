import * as React from 'react';
import { PageLayout } from '../layouts/pageLayout';

const IndexPage = () => {
  return (
    <PageLayout>
      <i>You had me at "Hello world!"</i>
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Coding Challenges</title>;
