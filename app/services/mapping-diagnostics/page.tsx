import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import BackToHomeButton from '@/components/BackToHomeButton';
import styles from '../engineering-design/engineering-design.module.css';

const capabilities = [
  '3D photogrammetry and point-cloud capture',
  'Digital twin creation for buildings and structures',
  'Structural mapping and dimensional analysis',
  'Forensic scene documentation and reconstruction',
  'Drone-based aerial site mapping',
];

export default function MappingDiagnosticsPage() {
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
              <div className={styles.capabilitiesTitle}>Sample 3D Capture</div>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                border: '1px solid #d9dee5',
                background: '#000',
                overflow: 'hidden',
              }}>
                <iframe
                  src="https://poly.cam/capture/877bad85-594c-4191-9295-ac6dd330dc50/embed"
                  title="Polycam 3D capture viewer"
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
