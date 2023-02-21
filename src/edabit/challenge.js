export const convertBinaryTextToNumber = value => {
  let input = value
    .toLowerCase()
    .split(' ')
    .filter(x => ['zero', 'one'].includes(x));
  const mod = input.length % 8;
  if (mod !== 0) {
    const quot = Math.floor(input.length / 8);
    input = input.slice(0, quot * 8);
  }

  return {
    input,
    output: input.map(textNum => (textNum === 'zero' ? 0 : 1)),
  };
};

export const getFibonacci = (len, arr = []) => {
  if (arr.length === len) {
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
};

export const boomSeven = input => {
  return input.includes(7) ? 'BOOM!' : 'there is no 7 in the array';
};

export const towerOfHanoi = (disc, moves = [], from = 'A', to = 'B', aux = 'C') => {
  if (disc === 0) {
    return moves;
  }

  const newMoves = towerOfHanoi(disc - 1, moves, from, aux, to);
  const move = `Move disc #${disc} from ${from} to ${aux}`;

  return towerOfHanoi(disc - 1, newMoves.concat(move), aux, to, from);
};

export const countBoomerangs = input => {
  return input.reduce((count, num, index) => {
    if (index > input.length - 3) {
      // almost end of the array
      // no boomerangs formed
      return count;
    }

    const isBoomerang = num === input[index + 2] && num !== input[index + 1];
    return isBoomerang ? count + 1 : count;
  }, 0);
};

/**
 * The politeness of a number is defined as the number of ways it can be expressed as the sum of consecutive integers.
 * This can be determine by getting the number of odd factors of a number.
 */
export const getNumberPoliteness = input => {
  let divisor = input;

  // get the "greatest" odd divisor
  while (divisor % 2 === 0) {
    divisor /= 2;
  }

  const divisors = [];
  for (let i = 3; i <= divisor; i += 2) {
    if (divisor % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

export const oddishOrEvenish = input => {
  const sum = String(input)
    .split('')
    .reduce((partialSum, num) => {
      return partialSum + parseInt(num);
    }, 0);

  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
};

export const getAvgSpeed = (upRate, downRate) => {
  return (2 * upRate * downRate) / (upRate + downRate);
};

export const getVodkaBottle = (obj, num) => {
  const objEntry = Object.entries(obj).filter(([key, value]) => key.includes('Rammstein') && value === num) ?? [];

  return objEntry.length > 0 ? objEntry[0][0] : undefined;
};

export const getSumOfProduct = input => {
  const products = input.reduce(
    (productArr, pair) => {
      const num = pair.split(',');
      return [productArr[0] * parseInt(num[0]), productArr[1] * parseInt(num[1])];
    },
    [1, 1],
  );

  return products[0] + products[1];
};

export const getStringsWithNumbers = input => {
  const regex = new RegExp(/\w*\d+\w*/, 'i');
  const output = input.reduce((arr, str) => {
    if (str.match(regex)) {
      return arr.concat(str);
    }
    return arr;
  }, []);

  return output;
};

export const getCombinations = input => {
  return input.reduce((p, i) => p * i, 1);
};

export const isPositiveDominant = input => {
  const { pos: positive, neg: negative } = input.reduce(
    ({ pos, neg }, num) => {
      if (num > 0 && !pos.includes(num)) {
        return { neg, pos: pos.concat(num) };
      } else if (num < 0 && !neg.includes(num)) {
        return { pos, neg: neg.concat(num) };
      }
      return { pos, neg };
    },
    { pos: [], neg: [] },
  );

  return positive.length > negative.length;
};

export const getFiscalCode = ({ surname, name, dob, gender }) => {
  const fiscalCodeMonthConversion = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'H',
    7: 'L',
    8: 'M',
    9: 'P',
    10: 'R',
    11: 'S',
    12: 'T',
  };

  const fiscalCodeArr = [];

  // SURNAME
  const surnameCode = [];
  const surnameConsonants = getConsonantsInString(surname).slice(0, 3);
  surnameCode.push(...surnameConsonants);
  if (surnameConsonants.length < 3) {
    const surnameVowels = getVowelsInString(surname).slice(0, 3 - surnameConsonants.length);
    surnameCode.push(...surnameVowels);
  }
  fiscalCodeArr.push(surnameCode.join('').padEnd(3, 'X'));

  // FIRST NAME
  const nameCode = [];
  let nameConsonants = getConsonantsInString(name);
  if (nameConsonants.length > 3) {
    nameConsonants = nameConsonants[0].concat(...nameConsonants.slice(2, 4));
  }
  nameCode.push(...nameConsonants);
  if (nameConsonants.length < 3) {
    const nameVowels = getVowelsInString(name).slice(0, 3 - nameConsonants.length);
    nameCode.push(...nameVowels);
  }
  fiscalCodeArr.push(nameCode.join('').padEnd(3, 'X'));

  // DATE OF BIRTH - day / month / year
  const dobDate = dob.split('/');
  fiscalCodeArr.push(dobDate[2].slice(2));
  fiscalCodeArr.push(fiscalCodeMonthConversion[dobDate[1]]);

  if (gender === 'M') {
    fiscalCodeArr.push(dobDate[0].padStart(2, '0'));
  } else {
    fiscalCodeArr.push(parseInt(dobDate[0]) + 40);
  }

  return fiscalCodeArr.join('').toUpperCase();
};

export const encryptCaesarCipher = (text, factor) => {
  const regex = new RegExp(/\w/, 'i');
  const output = text.split('').reduce((arr, c) => {
    let char = c;
    if (regex.test(c)) {
      const modFactor = isUppercase(c) ? 'A'.charCodeAt() : 'a'.charCodeAt();
      const charCode = c.charCodeAt();
      const newCharCode = ((charCode - modFactor + factor) % 26) + modFactor;

      char = String.fromCharCode(newCharCode);
    }

    return arr.concat(char);
  }, []);

  return output.join('');
};

export const translateTapCode = input => {
  return isTapCode(input) ? tapCodeToText(input) : textToTapCode(input);
};

export const getFrequencyByLevel = (arr, num) => {
  const output = countElementAtLevel(arr, num);
  return Object.entries(output);
};

const countElementAtLevel = (arr, num, level = 0) => {
  return arr.reduce(
    (obj, el) => {
      if (Array.isArray(el)) {
        const freqInLevel = countElementAtLevel(el, num, level + 1);
        return mergeObjects(obj, freqInLevel);
      }

      if (el === num) {
        return {
          ...obj,
          [String(level)]: obj[String(level)] + 1,
        };
      }

      return obj;
    },
    { [String(level)]: 0 },
  );
};

const mergeObjects = (obj1, obj2) => {
  return Object.entries(obj2).reduce((obj, [k, v]) => {
    if (obj[k]) {
      return {
        ...obj,
        [k]: obj[k] + v,
      };
    }

    return {
      ...obj,
      [k]: v,
    };
  }, obj1);
};

export const encryptEdabitScheme = input => {
  const str = input.replace(/\s/g, '');
  const len = str.length;

  const rowCount = Math.floor(Math.sqrt(len));
  const colCount = Math.ceil(len / rowCount);

  const grid = [];

  for (let i = 0; i < len; i += colCount) {
    const substr = str.slice(i, i + colCount);
    grid.push(substr.split(''));
  }

  const encryptedArr = [];
  for (let i = 0; i < colCount; i++) {
    const fragment = [];
    for (let j = 0; j < rowCount; j++) {
      fragment.push(grid[j][i] ?? '');
    }
    encryptedArr.push(fragment.join(''));
  }

  return encryptedArr.join(' ');
};

const TapCodePolybiusSquare = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['L', 'M', 'N', 'O', 'P'],
  ['Q', 'R', 'S', 'T', 'U'],
  ['V', 'W', 'X', 'Y', 'Z'],
];

const textToTapCode = str => {
  const tapCodeArr = str
    .toUpperCase()
    .split('')
    .reduce((arr, c) => {
      const letter = c === 'K' ? 'C' : c;
      // check if a letter
      if (/\w/i.test(c)) {
        const row = TapCodePolybiusSquare.findIndex(r => r.includes(letter));
        if (row > -1) {
          const col = TapCodePolybiusSquare[row].findIndex(x => x === letter);
          if (col > -1) {
            const code = ''.padEnd(row + 1, '.') + ' ' + ''.padEnd(col + 1, '.');
            return arr.concat(code);
          }
        }
      }

      return arr;
    }, []);

  return tapCodeArr.join(' ');
};

const tapCodeToText = code => {
  const textArr = code.match(/(\.+)\s(\.+)/g).reduce((arr, c) => {
    const index = c.split(' ');
    const row = index[0].split('').length - 1;
    const col = index[1].split('').length - 1;

    return arr.concat(TapCodePolybiusSquare[row][col]);
  }, []);

  return textArr.join('').toLowerCase();
};

const isTapCode = str => str.split(' ').every(x => x.includes('.'));

const getConsonantsInString = str => str.split('').reduce((arr, char) => (isVowel(char) ? arr : arr.concat(char)), []);

const getVowelsInString = str => str.split('').reduce((arr, char) => (isVowel(char) ? arr.concat(char) : arr), []);

const isVowel = char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());

const isUppercase = char => /[A-Z]/.test(char);
