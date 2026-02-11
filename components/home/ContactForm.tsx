"use client";

import { siteData } from '@/data/siteData';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const { form } = siteData.contact;

    return (
        <form className={styles.form}>
            <div className={styles.fieldGroup}>
                <label htmlFor="name" className={styles.label}>{form.nameLabel}</label>
                <input type="text" id="name" name="name" className={styles.input} required />
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="email" className={styles.label}>{form.emailLabel}</label>
                <input type="email" id="email" name="email" className={styles.input} required />
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="phone" className={styles.label}>{form.phoneLabel}</label>
                <input type="tel" id="phone" name="phone" className={styles.input} />
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="message" className={styles.label}>{form.messageLabel}</label>
                <textarea id="message" name="message" className={styles.textarea} rows={5} required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
                {form.submitText}
            </button>
        </form>
    );
}
