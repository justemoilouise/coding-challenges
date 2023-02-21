import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { getChangeOptions } from './challenge';

export const Challenge = () => {
  const [input, setInput] = React.useState([]);
  const [output, setOutput] = React.useState([]);
  const numRef = React.useRef();

  const onKeyDown = evt => {
    if (evt.code === 'Enter') {
      const currentTarget = evt.currentTarget;
      setInput(input.concat(parseInt(currentTarget.value)));
      currentTarget.value = '';
    }
  };

  const onClick = () => {
    if (!numRef?.current || numRef.current.value <= 0) {
      return;
    }

    setOutput(getChangeOptions(parseInt(numRef.current.value), input));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Coins:&nbsp;
          <input type='number' className={styles.inputField} onKeyDown={onKeyDown} />
        </div>
        {input.length > 0 && (
          <div className={styles.flexContainer}>
            {input.map((value, index) => (
              <Pill key={index} variant='secondary'>
                {value}
              </Pill>
            ))}
          </div>
        )}
        <div className={styles.flexContainer}>
          Money:&nbsp;
          <input ref={numRef} type='number' className={styles.inputField} />
        </div>
        <button className={styles.button} onClick={onClick}>
          Submit
        </button>
      </div>
      <div>
        Output:
        {output.length > 0 && (
          <div className={styles.flexContainer}>
            {output.map((value, index) => (
              <Pill key={index} variant='secondary'>
                {value.join(',')}
              </Pill>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
