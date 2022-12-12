import * as React from 'react';
import { Challenge } from '../../code-academy/challenge-__challenge__';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import data from '../../content/code-academy.json';

const breadcumbItems = [
  {
    link: '/code-academy',
    label: 'Code Academy'
  },
  {
    label: 'Challenge __challenge__',
  },
];

const details = data[0];

const Page = () => {
  return (
    <CodeAcademyPageLayout
      {...details}
      title={`Challenge __challenge__ - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge __challenge__</title>;
