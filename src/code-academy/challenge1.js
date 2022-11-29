import * as React from 'react';
// import * as styles from './challenge1.module.css';

const input = [500, 400, 400, 375, 300, 350, 325, 300];

export const Challenge1 = () => {
  const getMean = () => {
    const total = input.reduce((sum, num) => {
      return sum + num;
    }, 0);

    return total / input.length;
  };

  const getMode = () => {
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

  return (
    <div>
      Mean: {getMean()}
      Mode: {getMode()}
    </div>
  );
};
