import * as React from 'react';
import { Challenge } from '../../edabit/challenge-4';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 4',
  },
];

const details = data[3];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 4 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 4</title>;
