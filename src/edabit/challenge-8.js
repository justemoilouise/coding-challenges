import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { getAvgSpeed } from './challenge';

export const Challenge = () => {
  const upTimeRef = React.useRef();
  const upRateRef = React.useRef();
  const downRateRef = React.useRef();
  const [output, setOutput] = React.useState();

  const onClick = () => {
    if (!upRateRef.current || !downRateRef.current) {
      return;
    }

    setOutput(getAvgSpeed(
      parseInt(upRateRef.current.value),
      parseInt(downRateRef.current.value)
    ));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Uphill Time:&nbsp;<input ref={upTimeRef} type='number' className={styles.inputField} />
        </div>
        <div className={styles.flexContainer}>
          Uphill Rate:&nbsp;<input ref={upRateRef} type='number' className={styles.inputField} />
        </div>
        <div className={styles.flexContainer}>
          Downhill Rate:&nbsp;<input ref={downRateRef} type='number' className={styles.inputField} />
        </div>
        <button className={styles.button} onClick={onClick}>Submit</button>
      </div>
      {output && (
        <div className={styles.flexContainer}>
          Output: <strong>{output}</strong>
        </div>
      )}
    </div>
  );
};
