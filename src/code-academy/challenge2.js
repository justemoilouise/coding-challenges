import * as React from 'react';
import * as styles from './challenge2.module.css';
import { Pill } from '../components/pill/pill';

export const Challenge2 = () => {
  const [input, setInput] = React.useState([]);
  const [output, setOutput] = React.useState([]);

  const onKeyDown = (evt) => {
    if (evt.code === 'Enter') {
      const currentTarget = evt.currentTarget;
      setInput(input.concat(parseInt(currentTarget.value)));
      currentTarget.value = '';
    }
  };

  const onClick = () => {
    const min = Math.min(...input);
    const minIndex = input.findIndex(x => x === min);

    const subArr = input.slice(minIndex);
    const max = Math.max(...subArr);
    const maxIndex = input.findIndex(x => x === max);

    setOutput([minIndex, maxIndex]);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.flexContainer}>
          Input:&nbsp;<input type='number' className={styles.inputField} onKeyDown={onKeyDown} />
          <button className={styles.button} onClick={onClick}>Submit</button>
        </div>
        {input.length > 0 && (
          <div className={styles.flexContainer}>
            {input.map((value, index) => (
              <Pill key={index} variant='secondary'>{value}</Pill>
            ))}
          </div>
        )}
      </div>
      {output && (
        <div>
          <div className={styles.flexContainer}>
            Output:
          </div>
          {output.length > 0 && (
          <div className={styles.flexContainer}>
            {output.map((value, index) => (
              <Pill key={index} variant='secondary'>{value}</Pill>
            ))}
          </div>
        )}
        </div>
      )}
    </div>
  );
};
