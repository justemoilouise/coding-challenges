import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { getPrimeNumbers } from './challenge';

export const Challenge = () => {
  const inputRef = React.useRef(null);
  const [output, setOutput] = React.useState([]);

  const onClick = () => {
    if (!inputRef?.current) {
      return null;
    }
    
    const value = inputRef.current.value;
    const primeNumArr = getPrimeNumbers(value);

    setOutput(primeNumArr);
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div className={styles.flexContainer}>
        Input:&nbsp;<input type='number' ref={inputRef} className={styles.inputField} />
        <button className={styles.button} onClick={onClick}>Submit</button>
      </div>
      {output && (
        <div className={styles.flexContainer}>
          Output:
          <br />
          {output.map((value, index) => (
            <Pill key={index} variant='secondary'>{value}</Pill>
          ))}
        </div>
      )}
    </div>
  );
};
