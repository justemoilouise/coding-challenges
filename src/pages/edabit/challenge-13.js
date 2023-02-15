import * as React from 'react';
import { Challenge } from '../../edabit/challenge-13';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 13',
  },
];

const details = data[12];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 13 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 13</title>;
