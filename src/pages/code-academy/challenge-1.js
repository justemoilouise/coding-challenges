import * as React from 'react';
import { Challenge } from '../../code-academy/challenge-1';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import data from '../../content/code-academy.json';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy',
  },
  {
    label: 'Challenge 1',
  },
];

const details = data[0];

const Page = () => {
  return (
    <CodeAcademyPageLayout {...details} title={`Challenge 1 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 1</title>;
