"use client";

import BASE_PATH from '@/lib/basePath';
import styles from './LogoSlider.module.css';

const logos = [
  'allstate-logo.png',
  'wawanesa-insurance.svg',
  'resolve-quantum.png',
  'gnc-logo.png',
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

function LogoSet() {
  return (
    <div className={styles.set}>
      {logos.map((name) => (
        <div key={name} className={styles.logoWrap}>
          <img
            src={`${BASE_PATH}/images/logos/${name}`}
            alt={name}
            className={styles.logo}
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoSlider() {
  return (
    <section className={styles.section}>
      <div className={styles.track}>
        <LogoSet />
        <LogoSet />
      </div>
    </section>
  );
}
