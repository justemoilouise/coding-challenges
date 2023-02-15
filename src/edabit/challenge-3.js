import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { boomSeven } from './challenge';

export const Challenge = () => {
  const [input, setInput] = React.useState([]);
  const [output, setOutput] = React.useState([]);

  const onKeyDown = evt => {
    if (evt.code === 'Enter') {
      const currentTarget = evt.currentTarget;
      setInput(input.concat(parseInt(currentTarget.value)));
      currentTarget.value = '';
    }
  };

  const onClick = () => {
    setOutput(boomSeven(input));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Input:&nbsp;
          <input type='number' className={styles.inputField} onKeyDown={onKeyDown} />
          <button className={styles.button} onClick={onClick}>
            Submit
          </button>
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
      </div>
      {output && (
        <div>
          <div className={styles.flexContainer}>Output:</div>
          {output.length > 0 && (
            <div className={styles.flexContainer}>
              <strong>{output}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
