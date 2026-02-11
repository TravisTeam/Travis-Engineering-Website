import Image from 'next/image';
import { siteData } from '@/data/siteData';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.gridBackground}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {siteData.hero.title.split(' ').map((word, i) => (
                            <span key={i} className={styles.titleWord}>{word} </span>
                        ))}
                    </h1>
                    <h2 className={styles.subtitle}>{siteData.hero.subtitle}</h2>
                    <p className={styles.description}>{siteData.hero.description}</p>
                    <a href={siteData.hero.ctaLink} className={styles.ctaButton}>
                        {siteData.hero.ctaText}
                    </a>
                </div>
                <div className={styles.imageWrapper}>
                    {/* Using a placeholder div if image is missing, or the image if valid */}
                    <div className={styles.imageFrame}>
                        {/* The visual style of the reference often has a clean, possibly bordered or framed image */}
                        <img
                            src={siteData.hero.heroImage}
                            alt="Engineering Structure"
                            className={styles.heroImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
