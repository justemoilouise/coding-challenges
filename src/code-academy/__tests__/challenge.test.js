import { getMaxProfitDays, getMean, getMode, getPrimeNumbers } from "../challenge";

describe('Code Academy challenges fns', () => {
  test('challenge 1', () => {
    const arr = [2, 3, 4, 5, 6, 7, 2, 2];

    expect(getMean(arr)).toBe(3.875);
    expect(getMode(arr)).toBe(2);
  });

  test('challenge 2', () => {
    const input = [17, 11, 60, 25, 150, 75, 31, 120];

    expect(getMaxProfitDays(input)).toContain(1);
    expect(getMaxProfitDays(input)).toContain(4);
  });

  test('challenge 3', () => {
    const primeNumArr = getPrimeNumbers(11);

    expect(primeNumArr).toContain(2);
    expect(primeNumArr).toContain(11);
    expect(primeNumArr.length).toBe(5);
  });
});