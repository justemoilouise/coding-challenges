import * as React from 'react';
import { Link } from 'gatsby';
import { Card } from '../../components/card/card';
import { Grid } from '../../components/grid/grid';
import { Pill } from '../../components/pill/pill';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import { details as Challenge1Details } from './challenge-1';

const Page = () => {
  return (
    <CodeAcademyPageLayout>
      <Grid>
        <Link to='/code-academy/challenge-1'>
          <Card>
            <h4>Challenge 1</h4>
            <p>Calculate the Mean and Mode</p>
            <div>
              {Challenge1Details.tags.map((tag, index) => (
                <Pill key={index} variant='primary'>{tag}</Pill>
              ))}
            </div>
          </Card>
        </Link>
      </Grid>
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy</title>;
