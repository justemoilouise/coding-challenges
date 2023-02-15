import * as React from 'react';
import { Challenge } from '../../code-academy/challenge-18';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import data from '../../content/code-academy.json';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy',
  },
  {
    label: 'Challenge 18',
  },
];

const details = data[17];

const Page = () => {
  return (
    <CodeAcademyPageLayout {...details} title={`Challenge 18 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 18</title>;
