"use client";

import BASE_PATH from '@/lib/basePath';
import styles from './PdfSlideshow.module.css';

const pages = ['/images/forensic-pdf/01.jpg'];

export default function ForensicPdfSlideshow() {
  return (
    <div className={styles.viewer}>
      <div className={styles.frame}>
        <img src={`${BASE_PATH}${pages[0]}`} alt="Forensic engineering sample" className={styles.image} />
      </div>
    </div>
  );
}
