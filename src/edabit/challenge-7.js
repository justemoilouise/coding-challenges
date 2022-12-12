import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { oddishOrEvenish } from './challenge';

export const Challenge = () => {
  const inputRef = React.useRef();

  const [output, setOutput] = React.useState();

  const onClick = () => {
    const value = inputRef.current.value;
    if (value > 0) {
      setOutput(oddishOrEvenish(value));
    }
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div className={styles.flexContainer}>
        Input:&nbsp;<input type='number' min={1} ref={inputRef} className={styles.inputField} />
        <button className={styles.button} onClick={onClick}>Submit</button>
      </div>
      <div>
        Output:&nbsp;<strong>{output}</strong>
      </div>
    </div>
  );
};
