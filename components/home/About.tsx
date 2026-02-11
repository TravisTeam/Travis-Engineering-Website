import { siteData } from '@/data/siteData';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{siteData.about.title}</h2>
                    <div className={styles.textWrapper}>
                        {siteData.about.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className={styles.text}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
