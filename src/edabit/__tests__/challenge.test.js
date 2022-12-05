import { boomSeven, convertBinaryTextToNumber, getFibonacci, towerOfHanoi } from "../challenge";

describe('Edabit challenges fns', () => {
  test('Challenge 1', () => {
    const { output: output1 } = convertBinaryTextToNumber('zero one zero one zero one zero one');
    expect(output1.join('')).toBe('01010101');

    const { output: output2 } = convertBinaryTextToNumber('one one');
    expect(output2.length).toBe(0);
  });

  test('Challenge 2', () => {
    expect(getFibonacci(0).length).toBe(0);
    expect(getFibonacci(7).length).toBe(7);
  });

  test('Challenge 3', () => {
    expect(boomSeven([1, 2, 3, 4, 5, 6, 7])).toBe('BOOM!');
    expect(boomSeven([8, 6, 33, 100])).toBe('there is no 7 in the array');
  });

  test('Challenge 4', () => {
    expect(towerOfHanoi(3).length).toBe(7);
    expect(towerOfHanoi(5).length).toBe(31);
    expect(towerOfHanoi(0).length).toBe(0);
  });
});
