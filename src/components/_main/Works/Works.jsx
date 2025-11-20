import React from 'react';
import WorksCard from './WorksCard';
import { worksData } from './WorksData';
import styles from './Works.module.css';

export default function Works() {
  return (
    <section className={styles.worksSection}>
      <h2 className={styles.sectionHeading}>Works</h2>

      {/* 2列グリッド */}
      <div className={styles.cardContainer}>
        {worksData.map((data) => (
          // worksDataの各要素をpropsとして渡す
          <WorksCard
            key={data.id}
            title={data.title}
            previewImage={data.previewImage}
            path={data.path}
          />
        ))}
      </div>
    </section>
  );
}
