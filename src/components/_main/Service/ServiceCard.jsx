import React from 'react';
import styles from './ServiceCard.module.css';

// titleとiconsを受け取る
export default function ServiceCard({ title, icons }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.iconGrid}>
        {icons.map((icon) => (
          <div key={icon.name} className={styles.iconItem}>
            <img
              src={icon.path}
              alt={icon.name + 'アイコン'}
              className={styles.iconImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

