import * as React from 'react';
import { Challenge } from '../../edabit/challenge-11';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit'
  },
  {
    label: 'Challenge 11',
  },
];

const details = data[10];

const Page = () => {
  return (
    <EdabitPageLayout
      {...details}
      title={`Challenge 11 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 11</title>;
