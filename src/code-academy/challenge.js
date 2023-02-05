import { TreeNode } from "../data/treeNode";
import { getNumberPoliteness } from "../edabit/challenge";

export const getMean = (input) => {
  if (input.length === 0) {
    return 0;
  }

  const total = input.reduce((sum, num) => {
    return sum + num;
  }, 0);

  return total / input.length;
}

export const getMode = (input) => {
  if (input.length === 0) {
    return 0;
  }

  const mode = input
    .reduce((arr, num) => {
      const x = arr.find(x => x.value === num);
      if(!x) {
        return arr.concat({
          value: num,
          f: 1,
        });
      }
      x.f++;
      return arr;
    }, [])
    .reduce((obj, value) => {
      if (value.f > obj.f) {
        return value;
      }
      return obj;
    }, { f: 0} );

  return mode.value;
};

export const getMaxProfitDays = (input) => {
  const min = Math.min(...input);
  const minIndex = input.findIndex(x => x === min);

  const subArr = input.slice(minIndex);
  const max = Math.max(...subArr);
  const maxIndex = input.findIndex(x => x === max);

  return [minIndex, maxIndex];
}

export const getPrimeNumbers = (input) => {
  return Array.from({ length: input - 1 }).fill(2).reduce((arr, num, index) => {
    return isPrime(num + index) ? arr.concat(num + index) : arr;
  }, []);
}

export const arrayToBST = (arr, start, end) => {
  if (start > end) {
    return null;
  }

  const mid = Math.ceil((start + end) / 2);
  const node = new TreeNode(arr[mid]);
  node.left = arrayToBST(arr, start, mid - 1);
  node.right = arrayToBST(arr, mid + 1, end);

  return node;
}

export const preorderBST = (node, arr = []) => {
  if (node == null) {
    return arr;
  }

  arr.push(node.value);
  arr.concat(preorderBST(node.left, arr));
  arr.concat(preorderBST(node.right, arr));

  return arr;
}

export const getSemiPrimeNumbers = (input) => {
  if (input < 4) {
    return [];
  }

  const primeNumbers = getPrimeNumbers(input)

  // start with 4 because we know that this is the first non-prime number
  return Array.from({ length: input - 4 }).fill(4).reduce((arr, num, index) => {
    const currentNumber = num + index;

    for (const primeNum of primeNumbers) {
      const quot = currentNumber / primeNum;
      if (!Number.isNaN(quot) && primeNumbers.includes(quot)) {
        return arr.concat(currentNumber);
      }
    }

    return arr;
  }, []);
}

export const flatten2DArray = (input) => {
  return input.reduce((arr, value) => {
    return arr.concat(value);
  }, []);
}

export const getSumOfPrimeFactors = (input) => {
  const oddDivisors = getNumberPoliteness(input);
  const primeDivisors = oddDivisors.filter(x => isPrime(x) && x !== input);

  return primeDivisors.reduce((sum, num) => sum + num, 0);
}

export const isUniqueString = (input) => {
  const charCountObj = input.split('').reduce((obj, char) => {
    if (obj[char]) {
      return {
        ...obj,
        [char]: obj[char] + 1,
      };
    }

    return {
      ...obj,
      [char]: 1,
    };
  }, {});

  return Object.values(charCountObj).find(x => x > 1) ? false : true;
}

export const fizzbuzz = (input) => {
  return Array.from({ length: input }).reduce((arr, v, i) => {
    const num = i + 1;

    if (num % 3 === 0 && num % 5 === 0) {
      return arr.concat('FizzBuzz');
    }
    if (num % 3 === 0) {
      return arr.concat('Fizz');
    }
    if (num % 5 === 0) {
      return arr.concat('Buzz');
    }
    return arr.concat(num);
  }, []);
}

export const getMissingNumbers = (list, k) => {
  // sort and remove duplicates
  const arr = Array.from(new Set(list.sort((a, b) => a - b)));
  const missingNumArr = [];

  for(let i = 0; i <= arr.length; i++) {
    const diff = arr[i+1] - arr[i];
    // not consectuive, hence there's a missing number in between these two
    if (diff > 1) {
      missingNumArr.push(...getNumbersInBetween(arr[i], diff));
    } 
    if(missingNumArr.length >= k) {
      break;
    }
  }

  return missingNumArr.slice(0, k);
}

export const getXth = (input, x) => {
  const sortedArr = input.sort((a, b) => a - b);
  return sortedArr.at(x - 1) ?? -1;
}

export const reverseWords = (input) => {
  return input.split(' ').reverse().join(' ');
}

export const getProductOfOthers = (input) => {
  const outputArr = [];

  for(let i = 0; i<input.length; i++) {
    const othersArr = input.slice(0, i).concat(input.slice(i+1));
    const product = othersArr.reduce((p, num) => p * num, 1);
    outputArr.push(product); 
  }

  return outputArr;
}

export const getMaxProduct = (list, k) => {
  const maxArr = getMaxInArr(list, [], k).slice(0, k);

  return maxArr.reduce((p, n) => p * n, 1);
}

const getMaxInArr = (inputArr, maxArr, k) => {
  if (inputArr.length === 0) {
    return maxArr;
  }

  const max = Math.max(...inputArr);
  maxArr.push(max);

  if (maxArr.length === k) {
    return maxArr;
  }

  return getMaxInArr(inputArr.filter(x => x !== max), maxArr, k);
}

const isPrime = (num) => {
  if ([2,3,5].includes(num)) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    return false;
  }

  return true;
};

const getNumbersInBetween = (start, len) => {
  return Array.from({ length: len - 1 }).map((v, i) => start + i + 1);
}
