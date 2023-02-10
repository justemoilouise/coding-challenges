import * as React from 'react';
import { Challenge } from '../../edabit/challenge-17';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit'
  },
  {
    label: 'Challenge 17',
  },
];

const details = data[16];

const Page = () => {
  return (
    <EdabitPageLayout
      {...details}
      title={`Challenge 17 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge 17</title>;
