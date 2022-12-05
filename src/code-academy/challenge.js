import { TreeNode } from "../data/treeNode";

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

const isPrime = (num) => {
  if ([2,3,5].includes(num)) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    return false;
  }

  return true;
};
