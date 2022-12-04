import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import { Pill } from '../components/pill/pill';
import { convertBinaryTextToNumber } from './challenge';

export const Challenge = () => {
  const inputRef = React.useRef();

  const [data, setData] = React.useState();

  const handleClick = () => {
    if (!inputRef?.current) {
      return null;
    }

    const input = inputRef.current.value.toLowerCase().split(' ').filter(x => ['zero', 'one'].includes(x));
    const output = convertBinaryTextToNumber(input);

    setData({
      input,
      output,
    });
    inputRef.current.value = '';
  };

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        Input:&nbsp;<input ref={inputRef} className={styles.inputField} />
        <button className={styles.button} onClick={handleClick}>Convert</button>
      </div>
      {data && (
        <>
          <div className={styles.flexContainer}>
            Given:&nbsp;
            {data.input.map((num, i) => (<Pill key={i} variant='secondary'>{num}</Pill>))}
          </div>
          <div className={styles.flexContainer}>
            Output:&nbsp;<strong>{data.output}</strong>
          </div>
        </>
      )}
    </div>
  );
};
