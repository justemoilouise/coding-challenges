import { arrayToBST, fizzbuzz, flatten2DArray, getMaxProfitDays, getMean, getMode, getPrimeNumbers, getSemiPrimeNumbers, getSumOfPrimeFactors, isUniqueString, preorderBST } from "../challenge";

describe('Code Academy challenges fns', () => {
  test('Challenge 1', () => {
    const arr = [2, 3, 4, 5, 6, 7, 2, 2];

    expect(getMean(arr)).toBe(3.875);
    expect(getMode(arr)).toBe(2);
  });

  test('Challenge 2', () => {
    const input = [17, 11, 60, 25, 150, 75, 31, 120];

    expect(getMaxProfitDays(input)).toContain(1);
    expect(getMaxProfitDays(input)).toContain(4);
  });

  test('Challenge 3', () => {
    const primeNumArr = getPrimeNumbers(11);

    expect(primeNumArr).toContain(2);
    expect(primeNumArr).toContain(11);
    expect(primeNumArr.length).toBe(5);
  });

  test('Challenge 4', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7];
    const rootNode = arrayToBST(arr1, 0, arr1.length - 1);
    const preorder = [4, 2, 1, 3, 6, 5, 7 ];

    expect(rootNode.value).toBe(4);
    preorderBST(rootNode).map((value, index) => {
      expect(value).toBe(preorder[index]);
    });
  });

  test('Challenge 5', () => {
    const semiPrime = getSemiPrimeNumbers(10);
    expect(semiPrime.length).toBe(3);
  });

  test('Challenge 6', () => {
    const arr = flatten2DArray([1, 2, [3, 4, 5], 6, [7, 8], 9]);
    expect(arr.length).toBe(9);
  });

  test('Challenge 7', () => {
    expect(getSumOfPrimeFactors(91)).toBe(20);
  });

  test('Challenge 8', () => {
    expect(isUniqueString('apple')).toBe(false);
    expect(isUniqueString('and')).toBe(true);
  });

  test('Challenge 9', () => {
    // `fizzbuzz(16)` should return `[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16]`.
    const output = fizzbuzz(16);
    expect(output.length).toBe(16);
    expect(output[1]).toBe(2);
    expect(output[5]).toBe('Fizz');
    expect(output[9]).toBe('Buzz');
    expect(output[14]).toBe('FizzBuzz');
    expect(output[15]).toBe(16);
  });
});
