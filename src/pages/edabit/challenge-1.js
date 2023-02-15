import * as React from 'react';
import { Challenge } from '../../edabit/challenge-1';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 1',
  },
];

const details = data[0];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 1 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 1</title>;
