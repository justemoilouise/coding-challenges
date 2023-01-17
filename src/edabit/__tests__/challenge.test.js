import { boomSeven, convertBinaryTextToNumber, countBoomerangs, getAvgSpeed, getFibonacci, getNumberPoliteness, oddishOrEvenish, towerOfHanoi } from "../challenge";

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

  test('Challenge 5', () => {
    expect(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])).toBe(3);
    expect(countBoomerangs([5, 6, 6, 7, 6, 3, 9])).toBe(1);
    expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9])).toBe(0);
  });

  test('Challenge 6', () => {
    expect(getNumberPoliteness(90).length).toBe(5);
    expect(getNumberPoliteness(15).length).toBe(3);
  });

  test('Challenge 7', () => {
    expect(oddishOrEvenish(43)).toBe('Oddish');
    expect(oddishOrEvenish(373)).toBe('Oddish');
    expect(oddishOrEvenish(4433)).toBe('Evenish');
  });

  test('Challenge 8', () => {
    expect(getAvgSpeed(20, 60)).toBe(30);
    expect(getAvgSpeed(10, 30)).toBe(15);
    expect(getAvgSpeed(8, 24)).toBe(12);
  });
});
