import * as React from 'react';
import { Challenge } from '../../edabit/challenge-15';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit'
  },
  {
    label: 'Challenge 15',
  },
];

const details = data[14];

const Page = () => {
  return (
    <EdabitPageLayout
      {...details}
      title={`Challenge 15 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 15</title>;
