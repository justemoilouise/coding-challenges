import { arrayToBST, fizzbuzz, flatten2DArray, getMaxProduct, getMaxProfitDays, getMean, getMissingNumbers, getMode, getPermutations, getPrimeNumbers, getProductOfOthers, getSemiPrimeNumbers, getSumOfPrimeFactors, getXth, isUniqueString, preorderBST, reverseWords } from "../challenge";

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
    // `fizzbuzz(16)` should return `[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16]`
    const output = fizzbuzz(16);
    expect(output.length).toBe(16);
    expect(output[1]).toBe(2);
    expect(output[5]).toBe('Fizz');
    expect(output[9]).toBe('Buzz');
    expect(output[14]).toBe('FizzBuzz');
    expect(output[15]).toBe(16);
  });

  test('Challenge 10', () => {
    // ([1, 2, 4, 5, 6, 7, 8, 10], 2)` should return `[3, 9]`
    const list = [10, 2, 4, 4, 5, 7, 8, 1];
    const output = getMissingNumbers(list, 2);
    expect(output.length).toBe(2);
    expect(output[0]).toBe(3);
    expect(output[1]).toBe(6);
  });

  test('Challenge 11', () => {
    const input = [5, 10, -3, -3, 7, 9];
    expect(getXth(input, 2)).toBe(-3);
    expect(getXth(input, 4)).toBe(7);
  });

  test('Challenge 12', () => {
    expect(reverseWords('Codecademy rules')).toBe('rules Codecademy');
    expect(reverseWords('May the Fourth be with you')).toBe('you with be Fourth the May');
  });

  test('Challenge 13', () => {
    // ([1, 2, 3, 4, 5]) should return [120, 60, 40, 30, 24]
    const arr1 = getProductOfOthers([1, 2, 3, 4, 5]);
    expect(arr1.length).toBe(5);
    expect(arr1).toContain(40);
    expect(arr1.at(0)).toBe(120);
    expect(arr1.at(4)).toBe(24);
  });

  test('Challenge 14', () => {
    const input = [8, 6, -7, 3, 2, 1, 9];
    expect(getMaxProduct(input, 2)).toBe(72);
    expect(getMaxProduct(input, 3)).toBe(432);
  });

  test('Challenge 15', () => {
    // n=4 should return [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2] [1,3] [3,1]
    const expectedOutput = [[1,1,1,1], [2,1,1], [1,2,1], [1,1,2], [2,2], [1,3], [3,1]];
    const output = getPermutations(4);

    expect(output.length).toBe(expectedOutput.length);
  });
});
