import * as React from 'react';
import { Challenge } from '../../edabit/challenge-19';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge 19',
  },
];

const details = data[18];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge 19 - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 19</title>;
