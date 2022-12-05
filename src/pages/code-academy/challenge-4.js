import * as React from 'react';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import { Challenge } from '../../code-academy/challenge-4';
import data from '../../content/code-academy.json';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy'
  },
  {
    label: 'Challenge 4',
  },
];

const details = data[3];

const Page = () => {
  return (
    <CodeAcademyPageLayout
      {...details}
      title={`Challenge 4 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 4</title>;
