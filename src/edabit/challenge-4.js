import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { towerOfHanoi } from './challenge';

export const Challenge = () => {
  const inputRef = React.useRef();

  const [output, setOutput] = React.useState([]);

  const onClick = () => {
    const value = inputRef.current.value;
    if (value > 0) {
      setOutput(towerOfHanoi(inputRef.current.value));
    }
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div className={styles.flexContainer}>
        Input:&nbsp;
        <input type='number' min={1} ref={inputRef} className={styles.inputField} />
        <button className={styles.button} onClick={onClick}>
          Play
        </button>
      </div>
      {output && output.length > 0 && (
        <div>
          <div className={styles.flexContainer}>Output:</div>
          <ul>
            {output.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
