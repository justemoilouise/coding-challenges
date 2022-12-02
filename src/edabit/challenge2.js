import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';

export const Challenge2 = () => {
  const inputRef = React.useRef();

  const [seq, setSeq] = React.useState();

  const handleClick = () => {
    if (!inputRef?.current) {
      return null;
    }

    setSeq(undefined);

    const input = parseInt(inputRef.current.value);
    if (input && input > 0) {
      setSeq(getFibonacci([0], input));
    }
  };

  const getFibonacci = (arr, len) => {
    if (arr.length === len ) {
      return arr;
    }

    if (arr.length < 2) {
      return getFibonacci(arr.concat(1), len);
    }

    const arrLength = arr.length;
    const value = arr[arrLength - 1] + arr[arrLength - 2];
    return getFibonacci(arr.concat(value), len);
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div className={styles.flexContainer}>
        Input:&nbsp;<input type='number' min={0} ref={inputRef} className={styles.inputField} />
        <button className={styles.button} onClick={handleClick}>Submit</button>
      </div>
      {seq && (
        <div>
          Fibonacci Sequence:&nbsp;
          {seq.map((num, i) => (<Pill key={i} variant='secondary'>{num}</Pill>))}
        </div>
      )}
    </div>
  );
};
