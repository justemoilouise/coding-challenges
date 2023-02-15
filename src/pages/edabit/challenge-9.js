import * as React from 'react';
import { Challenge } from '../../edabit/challenge-9';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 9',
  },
];

const details = data[8];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 9 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 9</title>;
