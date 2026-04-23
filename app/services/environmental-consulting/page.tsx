import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import BackToHomeButton from '@/components/BackToHomeButton';
import PdfSlideshow from '@/components/PdfSlideshow';
import styles from '../engineering-design/engineering-design.module.css';

const capabilities = [
  'Designated Substance Surveys',
  'Mold, asbestos, and hazardous material assessments',
  'Phase One and Phase Two Environmental Site Assessments',
  'Indoor air quality and air testing',
  'Environmental reporting and remediation support',
];

export default function EnvironmentalConsultingPage() {
  return (
    <main>
      <Header />
      <section className={styles.page}>
        <div className={styles.container}>
          <BackToHomeButton />
          <div className={styles.grid}>
            <div>
              <h1 className={styles.title}>Environmental Consulting</h1>
              <p className={styles.copy}>
                We provide environmental consulting services to identify, assess, and manage environmental risks
                associated with buildings and sites.
              </p>
              <p className={styles.copy}>
                Our work supports regulatory compliance, redevelopment, and risk mitigation.
              </p>

              <div className={styles.capabilitiesTitle}>Environmental Services</div>
              <div className={styles.capabilities}>
                {capabilities.map((item) => (
                  <div key={item} className={styles.capability}>{item}</div>
                ))}
              </div>
            </div>

            <div>
              <div className={styles.capabilitiesTitle}>Sample ESA Phase One</div>
              <PdfSlideshow />
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
