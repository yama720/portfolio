import React from 'react';
import FavoriteItem from './FavoriteItem';
import styles from './Favorite.module.css';
import iron from './../../../assets/image/beads.png';
import clothes from './../../../assets/image/clothes.jpg';
import whip from './../../../assets/image/whip.jpg';
import ribbon from './../../../assets/image/ribbon.png';
import bag01 from './../../../assets/image/bag03.png';
import bag02 from './../../../assets/image/bag02.jpg';
import bag03 from './../../../assets/image/bag01.png';
import construction from './../../../assets/image/construction.png';

// 仮にここでデータを定義
const favoritesData = [
  {
    id: 1,
    imageUrl: iron,
    altText: 'アイロンビーズ',
  },
  {
    id: 2,
    imageUrl: clothes,
    altText: 'ぬい服',
  },
  {
    id: 3,
    imageUrl: whip,
    altText: 'ホイップデコ',
  },
  {
    id: 4,
    imageUrl: ribbon,
    altText: 'リボンで装飾作り',
  },
  {
    id: 5,
    imageUrl: bag01,
    altText: '痛バその1',
  },
  {
    id: 6,
    imageUrl: bag02,
    altText: '痛バその2',
  },
  {
    id: 7,
    imageUrl: bag03,
    altText: '痛バその3',
  },
];

const Favorite = () => {
  return (
    <section className={styles.favoriteSection}>
      <h2 className={styles.sectionHeading}>Favorite</h2>

      <h3 className={styles.sectionSub}>ものづくり</h3>
      <div className={styles.favoriteListGrid}>
        {favoritesData.map((item) => (
          // mapでループ処理し、各アイテムに一意のkeyを与える
          <FavoriteItem key={item.id} item={item} />
        ))}
      </div>

      <h3 className={styles.sectionSub}>イラスト</h3>
      <div className={styles.constructionContainer}>
        <img
          src={construction}
          alt="工事中イラスト"
          className={styles.constructionImage}
        />
        <p className={styles.constructionText}>工事中</p>
        <img
          src={construction}
          alt="工事中イラスト"
          className={styles.constructionImage}
        />
      </div>
    </section>
  );
};

export default Favorite;
