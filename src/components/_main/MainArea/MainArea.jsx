import React from 'react';
import styles from './MainArea.module.css';
import Profile from '../Profile/Profile';
import Service from '../Service/Service';
import Works from '../Works/Works';

export default function MainArea({ children }) {
  return (
    <div className={styles.main}>
      <main>{children}</main>
    </div>
  );
}
