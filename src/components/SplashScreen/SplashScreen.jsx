import React from 'react';
import styles from './SplashScreen.module.css';

// 閉じる関数をpropsで受け取る
const SplashScreen = ({ onClose }) => {
  return (
    <div className={styles.splashContainer} onClick={onClose}>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <p className={styles.action}>Click or Scroll to Enter</p>
    </div>
  );
};

export default SplashScreen;
