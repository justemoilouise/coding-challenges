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
