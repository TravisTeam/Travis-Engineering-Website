"use client";

import BASE_PATH from '@/lib/basePath';
import styles from './PdfSlideshow.module.css';

const pages = ['/images/damage-pdf/01.jpg'];

export default function DamagePdfSlideshow() {
  return (
    <div className={styles.viewer}>
      <div className={styles.frame}>
        <img src={`${BASE_PATH}${pages[0]}`} alt="Damage assessment sample" className={styles.image} />
      </div>
    </div>
  );
}
