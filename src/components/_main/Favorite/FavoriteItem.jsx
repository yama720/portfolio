import React from 'react';
import styles from './FavoriteItem.module.css';

const FavoriteItem = ({ item }) => {
  return (
    // グリッドセル内の要素を整えるためのラッパー
    <div className={styles.favoriteItemContainer}>
      <img
        src={item.imageUrl}
        alt={item.altText}
        className={styles.favoriteImage}
      />
      <p className={styles.itemCaption}>{item.altText}</p>
    </div>
  );
};

export default FavoriteItem;
