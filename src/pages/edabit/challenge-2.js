import * as React from 'react';
import { Challenge } from '../../edabit/challenge-2';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 2',
  },
];

const details = data[1];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 2 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 2</title>;
