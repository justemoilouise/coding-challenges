import * as React from 'react';
import { Challenge } from '../../edabit/challenge-14';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 14',
  },
];

const details = data[13];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 14 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 14</title>;
