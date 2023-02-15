import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { getFrequencyByLevel } from './challenge';

export const Challenge = () => {
  const [output, setOutput] = React.useState([]);
  const inputRef = React.useRef();
  const numRef = React.useRef();

  const onClick = () => {
    if (!inputRef?.current || !numRef?.current) {
      return;
    }

    setOutput(getFrequencyByLevel(
      JSON.parse(inputRef.current.value),
      parseInt(numRef.current.value)
    ));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Input:&nbsp;<input ref={inputRef} className={styles.inputField} />
        </div>
        <div className={styles.flexContainer}>
          Number:&nbsp;<input type='number' ref={numRef} className={styles.inputField} />
        </div>
        <button className={styles.button} onClick={onClick}>Submit</button>
      </div>
      <div>
        <div className={styles.flexContainer}>
          Output:
        </div>
        <div className={styles.flexContainer}>
          {output.map((value, index) => (
            <Pill key={index} variant='secondary'>{value.join(',')}</Pill>
          ))}
        </div>
      </div>
    </div>
  );
};
