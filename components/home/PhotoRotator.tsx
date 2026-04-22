"use client";

import { useEffect, useState } from 'react';
import BASE_PATH from '@/lib/basePath';
import styles from './PhotoRotator.module.css';

const images = [
    { src: `${BASE_PATH}/images/rotator/01-travis-construction.jpg`, alt: 'Travis construction', position: 'left center' },
    { src: `${BASE_PATH}/images/rotator/02-guy-travis-logo.jpg`, alt: 'Travis logo on worker', position: 'left center' },
    { src: `${BASE_PATH}/images/rotator/03-drawing-stock.jpg`, alt: 'Drafting stock photo', position: 'center' },
    { src: `${BASE_PATH}/images/rotator/04-close-inspecting.jpg`, alt: 'Close inspecting', position: 'center' },
    { src: `${BASE_PATH}/images/rotator/05-travis-worker.jpg`, alt: 'Travis worker', position: 'center' },
];

export default function PhotoRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 6500);
        return () => clearInterval(id);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Field Work Highlights</h2>
                <p className={styles.subtitle}>A rotating snapshot of our teams in action.</p>
                <div className={styles.frame}>
                    <img
                        key={images[index].src}
                        src={images[index].src}
                        alt={images[index].alt}
                        className={styles.image}
                        style={{ objectPosition: images[index].position }}
                    />
                </div>
                <div className={styles.dots}>
                    {images.map((img, i) => (
                        <button
                            key={img.src}
                            className={`${styles.dot} ${i === index ? styles.active : ''}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Show image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
