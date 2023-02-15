import * as React from 'react';
import { Challenge } from '../../code-academy/challenge-13';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import data from '../../content/code-academy.json';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy',
  },
  {
    label: 'Challenge 13',
  },
];

const details = data[12];

const Page = () => {
  return (
    <CodeAcademyPageLayout {...details} title={`Challenge 13 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 13</title>;
