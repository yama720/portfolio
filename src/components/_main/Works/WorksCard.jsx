import React from 'react';
// ページ遷移のために React Router の Link をインポート
import { Link } from 'react-router-dom';
import styles from './WorksCard.module.css';

export default function WorksCard({ title, previewImage, path }) {
  return (
    // Linkで全体を囲み、クリックするとpathへ遷移させる
    <Link to={path} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={previewImage}
            alt={title + 'のプレビュー画像'}
            className={styles.cardImage}
          />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </Link>
  );
}
