import * as React from 'react';
import { Challenge } from '../../edabit/challenge-8';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit'
  },
  {
    label: 'Challenge 8',
  },
];

const details = data[7];

const Page = () => {
  return (
    <EdabitPageLayout
      {...details}
      title={`Challenge 8 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 8</title>;
