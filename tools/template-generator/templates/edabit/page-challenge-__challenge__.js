import * as React from 'react';
import { Challenge } from '../../edabit/challenge-__challenge__';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit',
  },
  {
    label: 'Challenge __challenge__',
  },
];

const details = data[0];

const Page = () => {
  return (
    <EdabitPageLayout {...details} title={`Challenge __challenge__ - ${details.title}`} breadcumbItems={breadcumbItems}>
      <Challenge />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit - Challenge __challenge__</title>;
