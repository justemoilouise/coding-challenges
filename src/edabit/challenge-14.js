import * as React from 'react';
import * as styles from '../styles/challenge.module.css';
import classNames from 'classnames';
import { getFiscalCode } from './challenge';

export const Challenge = () => {
  const [output, setOutput] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const input = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      gender: e.target.gender.value,
      dob: e.target.dob.value,
    };

    setOutput(getFiscalCode(input));
  };

  return (
    <form onSubmit={onSubmit} className={classNames(styles.container, styles.gridContainer)}>
      <div>
        <div className={styles.flexContainer}>
          Surname:&nbsp;<input className={styles.inputField} name='surname' />
        </div>
        <div className={styles.flexContainer}>
          Name:&nbsp;<input className={styles.inputField} name='name' />
        </div>
        <div className={styles.flexContainer}>
          Gender:&nbsp;<input className={styles.inputField} name='gender' />
        </div>
        <div className={styles.flexContainer}>
          DOB:&nbsp;<input className={styles.inputField} name='dob' />
        </div>
        <button className={styles.button} type='submit'>Submit</button>
      </div>
      <div className={styles.flexContainer}>
        Output:&nbsp;<strong>{output}</strong>
      </div>
    </form>
  );
};
