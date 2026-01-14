import React from 'react';
import construction from '@assets/image/construction.png';

import styles from './Favorite.module.css';

const Favorite = () => {
  return (
    <section className={styles.favoriteSection}>
      <h2 className={styles.sectionHeading}>Favorite</h2>

      <h3 className={styles.sectionSub}>ものづくり</h3>
      <div className={styles.favoriteListGrid}>
        <p className={styles.descriptionText}>
          アイロンビーズやぬい服作り、ホイップデコや痛バッグなどの写真を載せていました。
        </p>
      </div>

      <h3 className={styles.sectionSub}>イラスト</h3>
      <div className={styles.constructionContainer}>
        {/* 画像タグを削除し、テキストのみにする */}
        <p className={styles.constructionText}>🚧 工事中 🚧</p>
      </div>
    </section>
  );
};

export default Favorite;
