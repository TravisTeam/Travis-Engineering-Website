"use client";

import styles from './LogoSlider.module.css';

const logos = [
  'Eagle View.png',
  'Hover Logo.png',
  'Logo_of_Thorold,_Ontario.svg.png',
  'MAX Insuance.png',
  'PRO-Lab-2C-noTag.png',
  'Roofr_Logo.jpg',
  'Toronto  logo design.png',
  'Toronto_Public_Library_Logo.png',
  'WTI_Pure-Air_Logo_Sticky.png',
  'allstate-logo.png',
  'emsl_analytical_inc_logo.jpg',
  'gnc-logo.png',
  'internachi-Logo.png',
  'puroclean-logo.png',
  'tremco-logo.png',
];

export default function LogoSlider() {
  const items = [...logos, ...logos];
  return (
    <section className={styles.section}>
      <div className={styles.track}>
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className={styles.logoWrap}>
            <img
              src={`/images/clients/logos/${name}`}
              alt={name}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
