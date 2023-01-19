import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { getVodkaBottle } from './challenge';

export const Challenge = () => {
  const [output, setOutput] = React.useState();
  const objRef = React.useRef();
  const numRef = React.useRef();

  const onClick = () => {
    if (!objRef.current || !numRef.current) {
      return;
    }

    setOutput(getVodkaBottle(
      JSON.parse(objRef.current.value),
      parseInt(numRef.current.value)
    ));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Object:&nbsp;<textarea ref={objRef} className={styles.inputField} />
        </div>
        <div className={styles.flexContainer}>
          Number:&nbsp;<input ref={numRef} type='number' className={styles.inputField} />
        </div>
        <button className={styles.button} onClick={onClick}>Submit</button>
      </div>
      <div className={styles.flexContainer}>
          Output: <strong>{output}</strong>
        </div>
    </div>
  );
};
