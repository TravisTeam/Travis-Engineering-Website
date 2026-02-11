"use client";

import { useState } from 'react';
import styles from './PdfSlideshow.module.css';

const pages = Array.from({ length: 13 }, (_, i) =>
  `/images/roof-pdf/Sample - IR ROOF SCAN (1).pdf/Sample - IR ROOF SCAN-${String(i + 1).padStart(2, '0')}.jpg`
);

export default function RoofPdfSlideshow() {
  const [index, setIndex] = useState(0);
  const total = pages.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className={styles.viewer}>
      <div className={styles.frame}>
        <img src={pages[index]} alt={`PDF page ${index + 1}`} className={styles.image} />
      </div>
      <div className={styles.controls}>
        <button className={styles.btn} onClick={prev}>Prev</button>
        <div className={styles.pageText}>Page {index + 1} of {total}</div>
        <button className={styles.btn} onClick={next}>Next</button>
      </div>
    </div>
  );
}
