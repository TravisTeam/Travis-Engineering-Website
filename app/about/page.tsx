import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import { siteData } from '@/data/siteData';
import styles from './about.module.css';

const photos = [
  '/images/about/01-team.avif',
  '/images/about/02-team.jpg',
  '/images/about/03-team.jpg',
  '/images/about/04-team.png',
  '/images/about/05-team.jpg',
  '/images/about/06-team.jpg',
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          {siteData.about.content.split('\n\n').map((p, i) => (
            <p key={i} className={styles.copy}>{p}</p>
          ))}

          <div className={styles.galleryTitle}>Our Team</div>
          <div className={styles.gallery}>
            {photos.map((src, i) => (
              <div key={src} className={styles.photoWrap}>
                <img src={src} alt={`Team photo ${i + 1}`} className={styles.photo} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
