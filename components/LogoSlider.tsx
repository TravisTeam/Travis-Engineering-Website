"use client";

import BASE_PATH from '@/lib/basePath';
import styles from './LogoSlider.module.css';

const logos: { file: string; scale?: number }[] = [
  { file: 'allstate-logo.png', scale: 3 },
  { file: 'wawanesa-insurance.svg', scale: 0.5 },
  { file: 'resolve-quantum.png', scale: 1.5 },
  { file: 'gnc-logo.png', scale: 2 },
  { file: 'Co-operators-New-Logo.png', scale: 2 },
  { file: 'EagleView-Full-Color-Vertical.svg', scale: 2 },
  { file: 'emsl_analytical_inc_logo.jpg', scale: 2 },
  { file: 'Hover Logo.png' },
  { file: 'internachi-Logo.png', scale: 2 },
  { file: 'Logo_of_Thorold,_Ontario.svg.png' },
  { file: 'Max Insurance.jpg', scale: 2 },
  { file: 'PRO-Lab-2C-noTag.png' },
  { file: 'puroclean-logo.png' },
  { file: 'Roofr_Logo.jpg', scale: 1.5 },
  { file: 'Toronto,_City_of.svg' },
  { file: 'Toronto_Public_Library_Logo.png' },
  { file: 'tremco-logo.png' },
  { file: 'WTI_Pure-Air_Logo_Sticky.png' },
];

function LogoSet() {
  return (
    <div className={styles.set}>
      {logos.map(({ file, scale }) => (
        <div key={file} className={styles.logoWrap}>
          <img
            src={`${BASE_PATH}/images/logos/${file}`}
            alt={file}
            className={styles.logo}
            style={scale ? { transform: `scale(${scale})` } : undefined}
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
