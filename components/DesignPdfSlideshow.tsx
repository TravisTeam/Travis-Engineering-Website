"use client";

import BASE_PATH from '@/lib/basePath';
import styles from './PdfSlideshow.module.css';

const pages = ['/images/design-pdf/01.jpg'];

export default function DesignPdfSlideshow() {
  return (
    <div className={styles.viewer}>
      <div className={styles.frame}>
        <img src={`${BASE_PATH}${pages[0]}`} alt="Design services sample" className={styles.image} />
      </div>
    </div>
  );
}
