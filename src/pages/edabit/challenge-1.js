import * as React from 'react';
import { Challenge1 } from '../../edabit/challenge1';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit'
  },
  {
    label: 'Challenge 1',
  },
];

const details = data[0];

const Page = () => {
  return (
    <EdabitPageLayout
      {...details}
      title={`Challenge 1 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge1 />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 1</title>;
