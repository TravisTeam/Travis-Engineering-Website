import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import RoofPdfSlideshow from '@/components/RoofPdfSlideshow';
import styles from '../engineering-design/engineering-design.module.css';

const capabilities = [
  'Flat and steep slope roofing systems',
  'Storm and impact damage analysis',
  'Installation and workmanship reviews',
  'Material aging and performance assessments',
  'Repair versus replacement opinions',
];

export default function ForensicRoofingPage() {
  return (
    <main>
      <Header />
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h1 className={styles.title}>Forensic Roofing</h1>
              <p className={styles.copy}>
                Our forensic roofing services focus on evaluating roof system performance, damage mechanisms,
                and failure causes.
              </p>
              <p className={styles.copy}>
                These assessments support insurance claims, dispute resolution, and long‑term asset planning.
              </p>

              <div className={styles.capabilitiesTitle}>Roofing Expertise</div>
              <div className={styles.capabilities}>
                {capabilities.map((item) => (
                  <div key={item} className={styles.capability}>{item}</div>
                ))}
              </div>
            </div>

            <div>
              <div className={styles.capabilitiesTitle}>Sample Forensic Roof Inspection</div>
              <RoofPdfSlideshow />
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
