import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { isUniqueString } from './challenge';

export const Challenge = () => {
  const inputRef = React.useRef(null);
  const [output, setOutput] = React.useState();

  const onClick = () => {
    if (!inputRef?.current || inputRef.current.value.length === 0) {
      setOutput('invalid input');
      return;
    }

    setOutput(isUniqueString(inputRef.current.value));
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
        Output:&nbsp;<strong>{String(output)}</strong>
      </div>
    </div>
  );
};
