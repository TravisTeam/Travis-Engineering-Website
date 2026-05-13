import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import BackToHomeButton from '@/components/BackToHomeButton';
import { siteData } from '@/data/siteData';
import BASE_PATH from '@/lib/basePath';
import styles from './about.module.css';

const photos = [
  { src: '/images/about/01-team.jpg', alt: 'Travis team' },
  { src: '/images/about/03-team.jpg', alt: 'Travis team' },
  { src: '/images/about/04-team.jpg', alt: 'Travis team' },
  { src: '/images/about/07-award-presentation.jpg', alt: 'Travis Certified Elite award presentation' },
  { src: '/images/about/08-asos-awos.jpg', alt: 'ASOS AWOS tower presentation' },
  { src: '/images/about/09-tremco-group.jpg', alt: 'Tremco group photo' },
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className={styles.about}>
        <div className={styles.container}>
          <BackToHomeButton />
          <h1 className={styles.title}>About Us</h1>
          {siteData.about.content.split('\n\n').map((p, i) => (
            <p key={i} className={styles.copy}>{p}</p>
          ))}

          <div className={styles.galleryTitle}>Our Team</div>
          <div className={styles.gallery}>
            {photos.map((photo) => (
              <div key={photo.src} className={styles.photoWrap}>
                <img src={`${BASE_PATH}${photo.src}`} alt={photo.alt} className={styles.photo} />
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
