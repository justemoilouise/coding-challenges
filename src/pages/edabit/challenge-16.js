import * as React from 'react';
import { Challenge } from '../../edabit/challenge-16';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 16',
  },
];

const details = data[15];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 16 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 16</title>;
