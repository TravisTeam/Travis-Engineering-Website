"use client";

import BASE_PATH from '@/lib/basePath';
import styles from './LogoSlider.module.css';

const logos = [
  'allstate-logo.png',
  'Co-operators-New-Logo.png',
  'EagleView-Full-Color-Vertical.svg',
  'emsl_analytical_inc_logo.jpg',
  'Hover Logo.png',
  'internachi-Logo.png',
  'Logo_of_Thorold,_Ontario.svg.png',
  'Max Insurance.jpg',
  'PRO-Lab-2C-noTag.png',
  'puroclean-logo.png',
  'Roofr_Logo.jpg',
  'Toronto,_City_of.svg',
  'Toronto_Public_Library_Logo.png',
  'tremco-logo.png',
  'WTI_Pure-Air_Logo_Sticky.png',
];

export default function LogoSlider() {
  const items = [...logos, ...logos];
  return (
    <section className={styles.section}>
      <div className={styles.track}>
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className={styles.logoWrap}>
            <img
              src={`${BASE_PATH}/images/logos/${name}`}
              alt={name}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
