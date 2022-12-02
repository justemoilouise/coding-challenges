import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import { Pill } from '../components/pill/pill';

export const Challenge1 = () => {
  const inputRef = React.useRef();

  const [data, setData] = React.useState();

  const handleClick = () => {
    if (!inputRef?.current) {
      return null;
    }

    let input = inputRef.current.value.toLowerCase().split(' ').filter(x => ['zero', 'one'].includes(x));

    const mod = input.length % 8;
    if (mod !== 0) {
      const quot = Math.floor(input.length / 8);
      input = input.slice(0, quot * 8);
    }

    const output = input.map(textNum => (textNum === 'zero' ? 0 : 1));

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
