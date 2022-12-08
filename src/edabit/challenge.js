export const convertBinaryTextToNumber = (value) => {
  let input = value.toLowerCase().split(' ').filter(x => ['zero', 'one'].includes(x));
  const mod = input.length % 8;
  if (mod !== 0) {
    const quot = Math.floor(input.length / 8);
    input = input.slice(0, quot * 8);
  }

  return {
    input,
    output: input.map(textNum => (textNum === 'zero' ? 0 : 1)),
  };
}

export const getFibonacci = (len, arr = []) => {
  if (arr.length === len ) {
    return arr;
  }

  if (arr.length === 0) {
    return getFibonacci(len, arr.concat(0));
  }

  if (arr.length < 2) {
    return getFibonacci(len, arr.concat(1));
  }

  const arrLength = arr.length;
  const value = arr[arrLength - 1] + arr[arrLength - 2];
  return getFibonacci(len, arr.concat(value));
}

export const boomSeven = (input) => {
  return input.includes(7)
    ? 'BOOM!'
    : 'there is no 7 in the array';
}

export const towerOfHanoi = (disc, moves = [], from = 'A', to = 'B', aux = 'C') => {
  if (disc === 0) {
    return moves;
  }

  const newMoves = towerOfHanoi(disc - 1, moves, from, aux, to);
  const move = `Move disc #${disc} from ${from} to ${aux}`;

  return towerOfHanoi(disc - 1, newMoves.concat(move), aux, to, from);
}

export const countBoomerangs = (input) => {
  return input.reduce((count, num, index) => {
    if (index > input.length - 3) {
      // almost end of the array
      // no boomerangs formed
      return count;
    }

    const isBoomerang = num === input[index+2] && num !== input[index+1];
    return isBoomerang ? count + 1 : count;
  }, 0);
}

/**
 * The politeness of a number is defined as the number of ways it can be expressed as the sum of consecutive integers.
 * This can be determine by getting the number of odd factors of a number.
 */
export const getNumberPoliteness = (input) => {
  let divisor = input;

  // get the "greatest" odd divisor
  while (divisor % 2 === 0) {
    divisor /= 2;
  }

  const divisors = [];
  for(let i = 3; i <= divisor; i+=2) {
    if ((divisor % i) === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}