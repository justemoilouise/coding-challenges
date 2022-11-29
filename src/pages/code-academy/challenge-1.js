import * as React from 'react';
import { Challenge1 } from '../../code-academy/challenge1';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy'
  },
  {
    label: 'Challenge 1',
  },
];

const Page = () => {
  return (
    <CodeAcademyPageLayout breadcumbItems={breadcumbItems}>
      <Challenge1 />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 1</title>;
