import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { Pill } from '../components/pill/pill';
import { arrayToBST, preorderBST } from './challenge';

export const Challenge = () => {
  const [input, setInput] = React.useState([]);
  const [output, setOutput] = React.useState();

  const onKeyDown = (evt) => {
    if (evt.code === 'Enter') {
      const currentTarget = evt.currentTarget;
      setInput(input.concat(parseInt(currentTarget.value)));
      currentTarget.value = '';
    }
  };

  const onClick = () => {
    const rootNode = arrayToBST(input, 0, input.length - 1);
    setOutput(preorderBST(rootNode));
  };

  return (
    <div className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Input:&nbsp;<input type='number' onKeyDown={onKeyDown} className={styles.inputField} />
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
          <div className={styles.flexContainer}>
            {output.map((value, index) => (
              <Pill key={index} variant='secondary'>{value}</Pill>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
