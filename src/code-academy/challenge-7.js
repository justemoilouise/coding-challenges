import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { getSumOfPrimeFactors } from './challenge';

export const Challenge = () => {
  const inputRef = React.useRef(null);
  const [output, setOutput] = React.useState();

  const onClick = () => {
    if (!inputRef?.current) {
      return null;
    }

    setOutput(getSumOfPrimeFactors(parseInt(inputRef.current.value)));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div className={styles.flexContainer}>
        Input:&nbsp;
        <input ref={inputRef} className={styles.inputField} />
        <button className={styles.button} onClick={onClick}>
          Submit
        </button>
      </div>
      <div className={styles.flexContainer}>
        Output:&nbsp;<strong>{output}</strong>
      </div>
    </div>
  );
};
