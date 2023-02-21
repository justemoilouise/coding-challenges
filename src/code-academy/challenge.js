import { TreeNode } from '../data/treeNode';
import { LinkedList } from '../data/LinkedList';
import { getFibonacci, getNumberPoliteness } from '../edabit/challenge';

export const getMean = input => {
  if (input.length === 0) {
    return 0;
  }

  const total = input.reduce((sum, num) => {
    return sum + num;
  }, 0);

  return total / input.length;
};

export const getMode = input => {
  if (input.length === 0) {
    return 0;
  }

  const mode = input
    .reduce((arr, num) => {
      const x = arr.find(x => x.value === num);
      if (!x) {
        return arr.concat({
          value: num,
          f: 1,
        });
      }
      x.f++;
      return arr;
    }, [])
    .reduce(
      (obj, value) => {
        if (value.f > obj.f) {
          return value;
        }
        return obj;
      },
      { f: 0 },
    );

  return mode.value;
};

export const getMaxProfitDays = input => {
  const min = Math.min(...input);
  const minIndex = input.findIndex(x => x === min);

  const subArr = input.slice(minIndex);
  const max = Math.max(...subArr);
  const maxIndex = input.findIndex(x => x === max);

  return [minIndex, maxIndex];
};

export const getPrimeNumbers = input => {
  return Array.from({ length: input - 1 })
    .fill(2)
    .reduce((arr, num, index) => {
      return isPrime(num + index) ? arr.concat(num + index) : arr;
    }, []);
};

export const arrayToBST = (arr, start, end) => {
  if (start > end) {
    return null;
  }

  const mid = Math.ceil((start + end) / 2);
  const node = new TreeNode(arr[mid]);
  node.left = arrayToBST(arr, start, mid - 1);
  node.right = arrayToBST(arr, mid + 1, end);

  return node;
};

export const preorderBST = (node, arr = []) => {
  if (node == null) {
    return arr;
  }

  arr.push(node.value);
  arr.concat(preorderBST(node.left, arr));
  arr.concat(preorderBST(node.right, arr));

  return arr;
};

export const getSemiPrimeNumbers = input => {
  if (input < 4) {
    return [];
  }

  const primeNumbers = getPrimeNumbers(input);

  // start with 4 because we know that this is the first non-prime number
  return Array.from({ length: input - 4 })
    .fill(4)
    .reduce((arr, num, index) => {
      const currentNumber = num + index;

      for (const primeNum of primeNumbers) {
        const quot = currentNumber / primeNum;
        if (!Number.isNaN(quot) && primeNumbers.includes(quot)) {
          return arr.concat(currentNumber);
        }
      }

      return arr;
    }, []);
};

export const flatten2DArray = input => {
  return input.reduce((arr, value) => {
    return arr.concat(value);
  }, []);
};

export const getSumOfPrimeFactors = input => {
  const oddDivisors = getNumberPoliteness(input);
  const primeDivisors = oddDivisors.filter(x => isPrime(x) && x !== input);

  return primeDivisors.reduce((sum, num) => sum + num, 0);
};

export const isUniqueString = input => {
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
};

export const fizzbuzz = input => {
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
};

export const getMissingNumbers = (list, k) => {
  // sort and remove duplicates
  const arr = Array.from(new Set(list.sort((a, b) => a - b)));
  const missingNumArr = [];

  for (let i = 0; i <= arr.length; i++) {
    const diff = arr[i + 1] - arr[i];
    // not consectuive, hence there's a missing number in between these two
    if (diff > 1) {
      missingNumArr.push(...getNumbersInBetween(arr[i], diff));
    }
    if (missingNumArr.length >= k) {
      break;
    }
  }

  return missingNumArr.slice(0, k);
};

export const getXth = (input, x) => {
  const sortedArr = input.sort((a, b) => a - b);
  return sortedArr.at(x - 1) ?? -1;
};

export const reverseWords = input => {
  return input.split(' ').reverse().join(' ');
};

export const getProductOfOthers = input => {
  const outputArr = [];

  for (let i = 0; i < input.length; i++) {
    const othersArr = input.slice(0, i).concat(input.slice(i + 1));
    const product = othersArr.reduce((p, num) => p * num, 1);
    outputArr.push(product);
  }

  return outputArr;
};

export const getMaxProduct = (list, k) => {
  const maxArr = getMaxInArr(list, [], k).slice(0, k);

  return maxArr.reduce((p, n) => p * n, 1);
};

export const getPermutations = n => {
  const arr = Array.from({ length: n - 1 }).map((x, i) => i + 1);
  const onesArr = Array.from({ length: n }).fill(1);
  return arrayPermutations(arr).concat([onesArr]);
};

export const getNthFibonacci = n => {
  const fibSeq = getFibonacci(n + 1);
  return fibSeq.pop();
};

// fix swap if root is included
export const swapLinkedListElements = (arr, el1, el2) => {
  const linkedList = convertArrayToLinkedList(arr);

  let prev1 = null;
  let placeholder1 = null;
  let prev2 = null;
  let placeholder2 = null;
  let prev = null;
  let node = linkedList.root;

  do {
    if (node.value === el1) {
      placeholder1 = node;
      prev1 = prev;
    }
    if (node.value === el2) {
      placeholder2 = node;
      prev2 = prev;
    }

    prev = node;
    node = node.next;
  } while (node != null);

  if (placeholder1 != null && placeholder2 != null) {
    if (prev1) {
      prev1.next = placeholder2;
    }
    if (prev2) {
      prev2.next = placeholder1;
    }

    const p2Next = placeholder2.next;
    placeholder2.next = placeholder1.next;
    placeholder1.next = p2Next;
  }

  return linkedList.toArray();
};

const convertArrayToLinkedList = input => {
  const linkedList = new LinkedList();
  input.map(i => linkedList.insert(i));
  return linkedList;
};

export const getChangeOptions = (money, coins) => {
  const filteredCoins = coins.filter(x => x <= money).sort((a, b) => b - a);
  const options = filteredCoins.reduce((arr, c, i) => {
    const subArr = filteredCoins.slice(i);
    return arr.concat([getCoinsChange(subArr, money)].concat(...getChangeOptionsFn(money, c, subArr.slice(1))));
  }, []);

  // filter results, such that
  // - removes empty arrays
  // - only those with elements with sum of input money
  return options.filter(x => x.length && x.reduce((s, a) => parseInt(a) + s, 0) === money);
};

// get change options using the same coin
const getChangeOptionsFn = (money, coin, coins, changeOptions = [], reps = 1) => {
  let diff = money - coin;
  if (diff <= 0) {
    return changeOptions;
  }

  const change = Array.from({ length: reps }).fill(String(coin)).concat(getCoinsChange(coins, diff));
  changeOptions.push([change]);

  return getChangeOptionsFn(diff - coin, coin, coins, changeOptions, reps + 1);
};

const getCoinsChange = (coins, currAmount, currCoins = []) => {
  if (currAmount === 0 || coins.length === 0) {
    return currCoins;
  }

  if (coins.length === 1 && coins[0] > currAmount) {
    return currCoins;
  }

  let coinsArr = coins;
  if (coinsArr[0] > currAmount) {
    coinsArr = coins.slice(1);
  }

  return getCoinsChange(coinsArr, currAmount - coinsArr[0], currCoins.concat(String(coinsArr[0])));
};

const arrayPermutations = arr => {
  if (arr.length <= 2) {
    return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  }

  return arr.reduce(
    (acc, item, i) => acc.concat(arrayPermutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])),
    [],
  );
};

const getMaxInArr = (inputArr, maxArr, k) => {
  if (inputArr.length === 0) {
    return maxArr;
  }

  const max = Math.max(...inputArr);
  maxArr.push(max);

  if (maxArr.length === k) {
    return maxArr;
  }

  return getMaxInArr(
    inputArr.filter(x => x !== max),
    maxArr,
    k,
  );
};

const isPrime = num => {
  if ([2, 3, 5].includes(num)) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    return false;
  }

  return true;
};

const getNumbersInBetween = (start, len) => {
  return Array.from({ length: len - 1 }).map((v, i) => start + i + 1);
};
