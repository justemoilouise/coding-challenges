import * as React from 'react';
import { Challenge } from '../../edabit/challenge-10';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 10',
  },
];

const details = data[9];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 10 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 10</title>;
