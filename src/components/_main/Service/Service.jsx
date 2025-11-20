import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from './ServiceData';
import styles from './Service.module.css';

export default function Service() {
  return (
    <section className={styles.serviceSection}>
      <h2 className={styles.sectionHeading}>Service</h2>

      {/* 3つのカードを横並びに */}
      <div className={styles.cardContainer}>
        {serviceData.map((data) => (
          <ServiceCard key={data.id} title={data.title} icons={data.icons} />
        ))}
      </div>
    </section>
  );
}
