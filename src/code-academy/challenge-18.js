import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { swapLinkedListElements } from './challenge';

export const Challenge = () => {
  const [output, setOutput] = React.useState([]);
  const inputRef = React.useRef();
  const elRef = React.useRef();

  const onClick = () => {
    if (!inputRef?.current || !elRef?.current) {
      return;
    }

    const el = elRef.current.value.split(',');

    setOutput(swapLinkedListElements(JSON.parse(inputRef.current.value), parseInt(el[0]), parseInt(el[1])));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Input:&nbsp;
          <input ref={inputRef} className={styles.inputField} />
        </div>
        <div className={styles.flexContainer}>
          Elements:&nbsp;
          <input ref={elRef} className={styles.inputField} />
        </div>
        <button className={styles.button} onClick={onClick}>
          Submit
        </button>
      </div>
      <div>
        <div className={styles.flexContainer}>Output:</div>
        <div className={styles.flexContainer}>
          {output.map((value, index) => (
            <Pill key={index} variant='secondary'>
              {value}
            </Pill>
          ))}
        </div>
      </div>
    </div>
  );
};
