import * as React from 'react';
import { Challenge2 } from '../../edabit/challenge2';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
import data from '../../content/edabit.json';

const breadcumbItems = [
  {
    link: '/edabit',
    label: 'Edabit'
  },
  {
    label: 'Challenge 2',
  },
];

const details = data[1];

const Page = () => {
  return (
    <EdabitPageLayout
      {...details}
      title={`Challenge 2 - ${details.title}`}
      breadcumbItems={breadcumbItems}
    >
      <Challenge2 />
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy - Challenge 2</title>;
