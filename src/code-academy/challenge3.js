import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';

export const Challenge = () => {
  const inputRef = React.useRef(null);
  const [output, setOutput] = React.useState([]);

  const onClick = () => {
    if (!inputRef?.current) {
      return null;
    }
    
    const value = inputRef.current.value;
    const primeNumArr = Array.from({ length: value - 1 }).reduce((arr, num, index) => {
      return isPrime(index + 2) ? arr.concat(index + 2) : arr;
    }, []);

    setOutput(primeNumArr);
  };

  const isPrime = (num) => {
    return num === 2 || num % 2 !== 0;
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div className={styles.flexContainer}>
        Input:&nbsp;<input type='number' ref={inputRef} className={styles.inputField} />
        <button className={styles.button} onClick={onClick}>Submit</button>
      </div>
      {output && (
        <div className={styles.flexContainer}>
          Output:&nbsp;
          {output.map((value, index) => (
            <Pill key={index} variant='secondary'>{value}</Pill>
          ))}
        </div>
      )}
    </div>
  );
};
