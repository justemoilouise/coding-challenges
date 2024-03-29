import * as React from 'react';
import { Challenge } from '../../edabit/challenge-3';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 3',
  },
];

const details = data[2];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 3 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 3</title>;
