import { siteData } from '@/data/siteData';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 className={styles.heading}>TRAVIS ENGINEERING</h3>
                        <p className={styles.text}>{siteData.footer.address}</p>
                        <p className={styles.text}>{siteData.footer.phone}</p>
                        <p className={styles.text}>{siteData.footer.website}</p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subHeading}>Links</h4>
                        {siteData.header.navItems.map(item => (
                            <a key={item.label} href={item.href} className={styles.link}>{item.label}</a>
                        ))}
                    </div>

                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Travis Engineering. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
