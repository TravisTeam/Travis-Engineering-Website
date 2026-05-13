"use client";

import { useState } from 'react';
import { siteData } from '@/data/siteData';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const { form } = siteData.contact;
    const [status, setStatus] = useState<Status>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');

        const data = Object.fromEntries(new FormData(e.currentTarget));

        try {
            const res = await fetch('https://formsubmit.co/ajax/hello@travisengineering.ca', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className={styles.successMessage}>
                <p>✓ Message sent! We&apos;ll be in touch shortly.</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
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

            {status === 'error' && (
                <p className={styles.errorMessage}>Something went wrong — please try again or email us directly.</p>
            )}

            <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : form.submitText}
            </button>
        </form>
    );
}
