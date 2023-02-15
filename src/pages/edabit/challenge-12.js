import * as React from 'react';
import { Challenge } from '../../edabit/challenge-12';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 12',
  },
];

const details = data[11];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 12 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 12</title>;
