"use client";

import styles from './PdfSlideshow.module.css';

const pages = ['/images/forensic-pdf/01.png'];

export default function ForensicPdfSlideshow() {
  return (
    <div className={styles.viewer}>
      <div className={styles.frame}>
        <img src={pages[0]} alt="Forensic engineering sample" className={styles.image} />
      </div>
    </div>
  );
}
