import Link from 'next/link';
import styles from './BackToHomeButton.module.css';

export default function BackToHomeButton() {
  return (
    <Link href="/" className={styles.button}>
      <span className={styles.arrow} aria-hidden="true">←</span>
      <span>Back to Home</span>
    </Link>
  );
}
