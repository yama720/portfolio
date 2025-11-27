import React from 'react';
import styles from './MainArea.module.css';

export default function MainArea({ children }) {
  return (
    <div className={styles.main}>
      <main>{children}</main>
    </div>
  );
}
