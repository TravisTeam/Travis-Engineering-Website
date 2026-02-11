"use client";

import { useRef } from 'react';
import Link from 'next/link';
import type { AnimatedIconHandle } from '@/components/ui/icons/types';
import styles from './Services.module.css';

// Props matching the service data structure
interface ServiceCardProps {
    service: {
        id: string;
        number: string;
        title: string;
        description: string;
        subServices?: { id: string; name: string }[];
    };
    IconComponent: React.ComponentType<any>;
}

export default function ServiceCard({ service, IconComponent }: ServiceCardProps) {
    const iconRef = useRef<AnimatedIconHandle>(null);

    const handleMouseEnter = () => {
        iconRef.current?.startAnimation();
    };

    const handleMouseLeave = () => {
        iconRef.current?.stopAnimation();
    };

    return (
        <Link
            href={`/services/${service.id}`}
            className={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            <div className={styles.cardHeader}>
                <span className={styles.number}>{service.number}</span>
                <div className={styles.iconWrapper}>
                    {/* @ts-ignore - Dynamic component Ref type issue */}
                    <IconComponent ref={iconRef} size={28} strokeWidth={1.5} />
                </div>
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>

            {service.subServices && (
                <ul className={styles.subList}>
                    {service.subServices.slice(0, 5).map(sub => (
                        <li key={sub.id} className={styles.subItem}>{sub.name}</li>
                    ))}
                    {service.subServices.length > 5 && (
                        <li className={styles.moreItem}>+ {service.subServices.length - 5} more</li>
                    )}
                </ul>
            )}

            <span className={styles.moreLink}>Learn more →</span>
        </Link>
    );
}
