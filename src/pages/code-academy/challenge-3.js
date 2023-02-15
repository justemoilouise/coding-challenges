import * as React from 'react';
import { Challenge } from '../../code-academy/challenge-3';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import data from '../../content/code-academy.json';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy',
  },
  {
    label: 'Challenge 3',
  },
];

const details = data[2];

const Page = () => {
  return (
    <CodeAcademyPageLayout {...details} title={`Challenge 3 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 3</title>;
