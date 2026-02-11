import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/siteData';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/images/logo.png" alt="Travis Engineering" className={styles.logoImage} />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {siteData.header.navItems.map((item) => (
                            <li key={item.label} className={styles.navItem}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.mobileMenu}>
                    {/* Mobile menu trigger would go here */}
                </div>
            </div>
        </header>
    );
}
