"use client";

import { useState } from 'react';
import BASE_PATH from '@/lib/basePath';
import styles from './PdfSlideshow.module.css';

const pages = [
  '/images/drone-pdf/0c42a5f8-7ed6-4c17-a907-c42278c24f85.jpg',
  '/images/drone-pdf/bcf10e90-d8f4-4e35-8494-41027c540850.jpg',
  '/images/drone-pdf/31dbb0f8-c220-47cd-b80f-43c92259d04b.jpg',
  '/images/drone-pdf/39e4e84d-e03c-4abc-9d11-e5be00362423.jpg',
];

export default function DronePdfSlideshow() {
  const [index, setIndex] = useState(0);
  const total = pages.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className={styles.viewer}>
      <div className={styles.frame}>
        <img src={`${BASE_PATH}${pages[index]}`} alt={`PDF page ${index + 1}`} className={styles.image} />
      </div>
      <div className={styles.controls}>
        <button className={styles.btn} onClick={prev}>Prev</button>
        <div className={styles.pageText}>Page {index + 1} of {total}</div>
        <button className={styles.btn} onClick={next}>Next</button>
      </div>
    </div>
  );
}
