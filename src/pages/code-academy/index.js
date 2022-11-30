import * as React from 'react';
import { Link } from 'gatsby';
import { Card } from '../../components/card/card';
import { Grid } from '../../components/grid/grid';
import { Pill } from '../../components/pill/pill';
import { CodeAcademyPageLayout } from '../../layouts/codeAcademy-pageLayout';
import data from '../../content/code-academy.json';

const Page = () => {
  return (
    <CodeAcademyPageLayout>
      <Grid>
        {data.map((d, i) => (
          <Link key={i} to={`/code-academy/challenge-${i + 1}`}>
            <Card>
              <h3>Challenge {i+1}</h3>
              <p>{d.title}</p>
              <div>
                {d.tags.map((tag, index) => (
                  <Pill key={index} variant='primary'>{tag}</Pill>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </Grid>
    </CodeAcademyPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Code Academy</title>;
