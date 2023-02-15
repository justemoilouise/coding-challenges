import * as React from 'react';
import { PageLayout } from '../layouts/pageLayout';

const IndexPage = () => {
  return (
    <PageLayout>
      <i>You had me at &ldquo;Hello world!&rdquo;</i>
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Coding Challenges</title>;
