import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import BackToHomeButton from '@/components/BackToHomeButton';
import styles from './contactus.module.css';

export default function ContactUsPage() {
    return (
        <main>
            <Header />
            <section className={styles.pageShell}>
                <div className={styles.container}>
                    <BackToHomeButton />
                </div>
            </section>
            <Contact />
            <Footer />
        </main>
    );
}
