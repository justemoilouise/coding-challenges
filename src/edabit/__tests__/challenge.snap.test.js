import React from 'react';
import renderer from 'react-test-renderer';
import { Challenge as Challenge1 } from '../challenge-1';
import { Challenge as Challenge2 } from '../challenge-2';
import { Challenge as Challenge3 } from '../challenge-3';
import { Challenge as Challenge4 } from '../challenge-4';
import { Challenge as Challenge5 } from '../challenge-5';
import { Challenge as Challenge6 } from '../challenge-6';
import { Challenge as Challenge7 } from '../challenge-7';
import { Challenge as Challenge8 } from '../challenge-8';
import { Challenge as Challenge9 } from '../challenge-9';
import { Challenge as Challenge10 } from '../challenge-10';
import { Challenge as Challenge11 } from '../challenge-11';
import { Challenge as Challenge12 } from '../challenge-12';
import { Challenge as Challenge13 } from '../challenge-13';

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

  it('Challenge 4', () => {
    const tree = renderer
      .create(<Challenge4 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 5', () => {
    const tree = renderer
      .create(<Challenge5 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 6', () => {
    const tree = renderer
      .create(<Challenge6 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 7', () => {
    const tree = renderer
      .create(<Challenge7 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 8', () => {
    const tree = renderer
      .create(<Challenge8 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 9', () => {
    const tree = renderer
      .create(<Challenge9 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 10', () => {
    const tree = renderer
      .create(<Challenge10 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 11', () => {
    const tree = renderer
      .create(<Challenge11 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 12', () => {
    const tree = renderer
      .create(<Challenge12 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Challenge 13', () => {
    const tree = renderer
      .create(<Challenge13 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
