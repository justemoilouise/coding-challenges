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

export const details = {
  title: 'Challenge 1 - Calculate the Mean and Mode',
  description: 'Given a list of numbers, return the list\'s mean and mode. If there are multiple modes, return the mode that occurs first.',
  link: 'https://www.codecademy.com/code-challenges/code-challenge-calculate-the-mean-and-mode-javascript',
  tags: [ 'Algorithmic Complexity', 'Intermediate' ],
};

const Page = () => {
  return (
    <CodeAcademyPageLayout
      {...details}
      breadcumbItems={breadcumbItems}
    >
      <Challenge1 />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 1</title>;
