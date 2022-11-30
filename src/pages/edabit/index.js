import * as React from 'react';
// import { Link } from 'gatsby';
// import { Card } from '../../components/card/card';
// import { Grid } from '../../components/grid/grid';
// import { Pill } from '../../components/pill/pill';
import { EdabitPageLayout } from '../../layouts/edabit-pageLayout';
// import data from '../../content/code-academy.json';

const Page = () => {
  return (
    <EdabitPageLayout>
      {/* <Grid>
        {data.map((d, i) => (
          <Link key={i} to={`/code-academy/challenge-${i + 1}`}>
            <Card>
              <h4>Challenge {i+1}</h4>
              <p>{d.title}</p>
              <div>
                {d.tags.map((tag, index) => (
                  <Pill key={index} variant='primary'>{tag}</Pill>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </Grid> */}
    </EdabitPageLayout>
  );
};

export default Page;

export const Head = () => <title>Coding Challenges - Edabit</title>;
