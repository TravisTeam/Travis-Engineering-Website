import { siteData } from '@/data/siteData';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

export default function Contact() {
    const { contact } = siteData;

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.pageTitle}>{contact.title}</h2>

                <div className={styles.grid}>

                    {/* Left Column: Info */}
                    <div className={styles.infoColumn}>
                        <h3 className={styles.sectionTitle}>{contact.infoTitle}</h3>

                        {/* Phone */}
                        <div className={styles.item}>
                            <h4 className={styles.label}>{contact.phone.label}</h4>
                            <div className={styles.value}>
                                <a href={`tel:${contact.phone.number}`} className={styles.link}>
                                    {contact.phone.number}
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className={styles.item}>
                            <h4 className={styles.label}>{contact.email.label}</h4>
                            <div className={styles.value}>
                                <a href={`mailto:${contact.email.address}`} className={styles.link}>
                                    {contact.email.address}
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className={styles.item}>
                            <h4 className={styles.label}>{contact.address.label}</h4>
                            <div className={styles.value}>
                                {contact.address.lines.map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className={styles.item}>
                            <h4 className={styles.label}>{contact.serviceAreas.label}</h4>
                            <p className={styles.description}>
                                {contact.serviceAreas.description}
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Form */}
                    <div className={styles.formColumn}>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
