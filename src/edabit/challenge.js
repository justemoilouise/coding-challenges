export const convertBinaryTextToNumber = (input) => {
  const mod = input.length % 8;
  if (mod !== 0) {
    const quot = Math.floor(input.length / 8);
    input = input.slice(0, quot * 8);
  }

  return input.map(textNum => (textNum === 'zero' ? 0 : 1));
}

export const getFibonacci = (arr, len) => {
  if (arr.length === len ) {
    return arr;
  }

  if (arr.length < 2) {
    return getFibonacci(arr.concat(1), len);
  }

  const arrLength = arr.length;
  const value = arr[arrLength - 1] + arr[arrLength - 2];
  return getFibonacci(arr.concat(value), len);
}

export const boomSeven = (input) => {
  return input.includes(7)
    ? 'BOOM!'
    : 'there is no 7 in the array';
}
