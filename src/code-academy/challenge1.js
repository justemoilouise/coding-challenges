import * as React from 'react';
import * as styles from './challenge1.module.css';
import { Pill } from '../components/pill/pill';

export const Challenge1 = () => {
  const [input, setInput] = React.useState([]);

  const getMean = () => {
    if (input.length === 0) {
      return 0;
    }

    const total = input.reduce((sum, num) => {
      return sum + num;
    }, 0);

    return (total / input.length).toFixed(2);
  };

  const getMode = () => {
    if (input.length === 0) {
      return 0;
    }

    const mode = input
      .reduce((arr, num) => {
        const x = arr.find(x => x.value === num);
        if(!x) {
          return arr.concat({
            value: num,
            f: 1,
          });
        }
        x.f++;
        return arr;
      }, [])
      .reduce((obj, value) => {
        if (value.f > obj.f) {
          return value;
        }
        return obj;
      }, { f: 0} );

    return mode.value;
  };

  const onKeyDown = (evt) => {
    if (evt.code === 'Enter') {
      const currentTarget = evt.currentTarget;
      setInput(input.concat(parseInt(currentTarget.value)));
      currentTarget.value = undefined;
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.inputContainer}>
          Input:&nbsp;<input type='number' className={styles.inputField} onKeyDown={onKeyDown} />
        </div>
        {input.length > 0 && (
          <div className={styles.inputContainer}>
            {input.map((value, index) => (
              <Pill key={index} variant='secondary'>{value}</Pill>
            ))}
          </div>
        )}
      </div>
      <div>
        Mean: <strong>{getMean()}</strong>
        <br /><br />
        Mode: <strong>{getMode()}</strong>
      </div>
    </div>
  );
};
