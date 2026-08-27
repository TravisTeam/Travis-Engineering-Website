"use client";

import { useState } from 'react';
import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import BackToHomeButton from '@/components/BackToHomeButton';
import styles from '../engineering-design/engineering-design.module.css';
import scanStyles from './mapping-diagnostics.module.css';

const scans = [
  {
    id: 'scan-1',
    label: 'Scan 01',
    embedUrl: 'https://3dviewer.dji.com/s/0d5b52c3-b538-4ab8-ae42-2e41ca59b96f',
  },
  {
    id: 'scan-2',
    label: 'Scan 02',
    embedUrl: 'https://3dviewer.dji.com/s/f107dacc-2ec2-4b68-957c-9972a608c8fa',
  },
];

const capabilities = [
  '3D photogrammetry and point-cloud capture',
  'Digital twin creation for buildings and structures',
  'Structural mapping and dimensional analysis',
  'Forensic scene documentation and reconstruction',
  'Drone-based aerial site mapping',
];

export default function MappingDiagnosticsPage() {
  const [activeScan, setActiveScan] = useState(scans[0]);

  return (
    <main>
      <Header />
      <section className={styles.page}>
        <div className={styles.container}>
          <BackToHomeButton />
          <div className={styles.grid}>
            <div>
              <h1 className={styles.title}>Mapping &amp; Diagnostics</h1>
              <p className={styles.copy}>
                We capture high-resolution 3D models of structures, sites, and scenes using
                photogrammetry and advanced scanning technology.
              </p>
              <p className={styles.copy}>
                Our digital twins provide accurate, navigable records for forensic documentation,
                structural diagnostics, insurance claims, and expert testimony.
              </p>

              <div className={styles.capabilitiesTitle}>Capabilities</div>
              <div className={styles.capabilities}>
                {capabilities.map((item) => (
                  <div key={item} className={styles.capability}>{item}</div>
                ))}
              </div>
            </div>

            <div>
              <div className={scanStyles.viewerHeader}>
                <div className={styles.capabilitiesTitle} style={{ marginBottom: 0 }}>
                  Sample 3D Captures
                </div>
                <div className={scanStyles.scanTabs}>
                  {scans.map((scan) => (
                    <button
                      key={scan.id}
                      className={`${scanStyles.scanTab} ${activeScan.id === scan.id ? scanStyles.scanTabActive : ''}`}
                      onClick={() => setActiveScan(scan)}
                    >
                      {scan.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                border: '1px solid #d9dee5',
                background: '#000',
                overflow: 'hidden',
              }}>
                <iframe
                  key={activeScan.id}
                  src={activeScan.embedUrl}
                  title={`DJI 3D capture — ${activeScan.label}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allowFullScreen
                />
              </div>
              <p className={styles.caption}>
                Interactive 3D scan — click and drag to explore
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
