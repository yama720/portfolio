import React from 'react';
import styles from './SplashScreen.module.css';

// 閉じる関数をpropsで受け取る
const SplashScreen = ({ onClose, splashClass }) => {
  return (
    <div
      className={`${styles.splashContainer} ${styles[splashClass] || ''}`}
      onAnimationEnd={onClose} // ★ アニメ終了後に閉じる
    >
      <h1 className={styles.title}>PORTFOLIO</h1>
      <p className={styles.action}>Click or Scroll </p>
    </div>
  );
};

export default SplashScreen;
