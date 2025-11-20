import React from 'react';
import styles from './FavoriteItem.module.css';

const FavoriteItem = ({ item }) => {
  return (
    <div
      className={`${styles.favoriteItemContainer} ${
        item.isWide ? styles.wideItem : ''
      }`}
    >
      <img
        src={item.imageUrl}
        alt={item.altText}
        className={`${styles.favoriteImage} ${
          item.isWide ? styles.wideImage : ''
        }`}
      />
      <p className={styles.itemCaption}>{item.altText}</p>
    </div>
  );
};

export default FavoriteItem;
