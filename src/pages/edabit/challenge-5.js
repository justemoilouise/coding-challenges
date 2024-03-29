import * as React from 'react';
import { Challenge } from '../../edabit/challenge-5';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 5',
  },
];

const details = data[4];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 5 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 5</title>;
