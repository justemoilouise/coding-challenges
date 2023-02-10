import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { encryptEdabitScheme } from './challenge';

export const Challenge = () => {
  const [output, setOutput] = React.useState();
  const strRef = React.useRef();

  const onClick = () => {
    if (!strRef?.current) {
      return;
    }

    setOutput(encryptEdabitScheme(strRef.current.value));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          String:&nbsp;<input ref={strRef} className={styles.inputField} />
        </div>
        <button className={styles.button} onClick={onClick}>Submit</button>
      </div>
      <div className={styles.flexContainer}>
        Output:&nbsp;<strong>{output}</strong>
      </div>
    </div>
  );
};
