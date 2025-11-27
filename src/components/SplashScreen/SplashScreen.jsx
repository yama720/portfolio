import React from 'react';
import styles from './SplashScreen.module.css';
import ScrollImage from '@assets/image/Scroll.png';

// 閉じる関数をpropsで受け取る
const SplashScreen = ({ onClose, splashClass }) => {
  const titleText = 'PORTFOLIO';

  // 文字列を1文字ずつ分割し、<span>でラップする
  const animationTitle = titleText.split('').map((char, index) => (
    <span
      key={index}
      // ホバー時のクラス。
      className={styles.animationChar}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  const handleAnimationEnd = (e) => {
    // animationName が slideUp のときのみ onClose を実行
    if (e.animationName === 'slideUp') {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.splashContainer} ${styles[splashClass] || ''}`}
      onAnimationEnd={handleAnimationEnd} // アニメ終了後に閉じる
    >
      <h1 className={styles.title}>{animationTitle}</h1>
      <div className={styles.action}>
        <img
          src={ScrollImage}
          alt="スクロール矢印"
          className={styles.ScrollImg}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
