import React from 'react';
import renderer from 'react-test-renderer';
import { Challenge as Challenge1 } from '../challenge-1';
import { Challenge as Challenge2 } from '../challenge-2';
import { Challenge as Challenge3 } from '../challenge-3';

describe('Edabit challenges snapshots', () => {
  it('Challenge 1', () => {
    const tree = renderer
      .create(<Challenge1 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 2', () => {
    const tree = renderer
      .create(<Challenge2 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 3', () => {
    const tree = renderer
      .create(<Challenge3 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
