import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { getMean, getMode } from './challenge';

export const Challenge = () => {
  const [input, setInput] = React.useState([]);

  const onKeyDown = evt => {
    if (evt.code === 'Enter') {
      const currentTarget = evt.currentTarget;
      setInput(input.concat(parseInt(currentTarget.value)));
      currentTarget.value = undefined;
    }
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Input:&nbsp;
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
      </div>
      <div>
        Mean: <strong>{getMean(input).toFixed(2)}</strong>
        <br />
        <br />
        Mode: <strong>{getMode(input)}</strong>
      </div>
    </div>
  );
};
