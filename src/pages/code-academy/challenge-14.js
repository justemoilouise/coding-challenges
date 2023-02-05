import * as React from 'react';
import { Challenge } from '../../code-academy/challenge-14';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import data from '../../content/code-academy.json';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy'
  },
  {
    label: 'Challenge 14',
  },
];

const details = data[13];

const Page = () => {
  return (
    <CodeAcademyPageLayout
      {...details}
      title={`Challenge 14 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 14</title>;
