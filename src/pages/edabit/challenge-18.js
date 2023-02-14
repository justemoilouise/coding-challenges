import * as React from 'react';
import { Challenge } from '../../edabit/challenge-18';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit'
  },
  {
    label: 'Challenge 18',
  },
];

const details = data[17];

const Page = () => {
  return (
    <EdabitPageLayout
      {...details}
      title={`Challenge 18 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 18</title>;
