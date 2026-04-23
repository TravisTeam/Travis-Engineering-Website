import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import BackToHomeButton from '@/components/BackToHomeButton';
import DronePdfSlideshow from '@/components/DronePdfSlideshow';
import styles from '../engineering-design/engineering-design.module.css';

const capabilities = [
  'Roof and building envelope surveys',
  'Solar array inspections',
  'Grain towers and industrial structures',
  'Electrical and utility components',
  'Thermal imaging and moisture detection',
];

export default function DroneInspectionsPage() {
  return (
    <main>
      <Header />
      <section className={styles.page}>
        <div className={styles.container}>
          <BackToHomeButton />
          <div className={styles.grid}>
            <div>
              <h1 className={styles.title}>Drone Inspections</h1>
              <p className={styles.copy}>
                We use advanced drone and thermal imaging technology to safely inspect hard‑to‑access
                structures.
              </p>
              <p className={styles.copy}>
                Drone inspections allow for efficient data collection while minimizing site disruption and safety risk.
              </p>

              <div className={styles.capabilitiesTitle}>Drone Inspection Applications</div>
              <div className={styles.capabilities}>
                {capabilities.map((item) => (
                  <div key={item} className={styles.capability}>{item}</div>
                ))}
              </div>
            </div>

            <div>
              <div className={styles.capabilitiesTitle}>Sample Drone Inspections</div>
              <DronePdfSlideshow />
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
