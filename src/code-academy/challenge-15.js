import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { getPermutations } from './challenge';

export const Challenge = () => {
  const [output, setOutput] = React.useState([]);
  const numRef = React.useRef();

  const onClick = () => {
    if (!numRef?.current || numRef.current.value <= 0) {
      return;
    }

    setOutput(getPermutations(parseInt(numRef.current.value)));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Input:&nbsp;
          <input type='number' ref={numRef} className={styles.inputField} />
        </div>
        <button className={styles.button} onClick={onClick}>
          Submit
        </button>
      </div>
      <div>
        <div className={styles.flexContainer}>Output:</div>
        {output.map((value, index) => (
          <Pill key={index} variant='secondary'>
            {value.join(',')}
          </Pill>
        ))}
      </div>
    </div>
  );
};
