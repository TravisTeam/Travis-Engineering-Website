import { siteData } from '@/data/siteData';
import styles from './Services.module.css';
import ServiceCard from './ServiceCard';

// Import Itshover Icons
import MagnifierIcon from '@/components/ui/icons/magnifier-icon';
import ShieldCheckIcon from '@/components/ui/icons/shield-check';
import PenIcon from '@/components/ui/icons/pen-icon';
import GlobeIcon from '@/components/ui/icons/globe-icon';
import RoofMagnifierIcon from '@/components/ui/icons/roof-magnifier-icon';
import DroneCameraIcon from '@/components/ui/icons/drone-camera-icon';

// Map icon strings from siteData to Components
const IconMap: { [key: string]: any } = {
    'search': MagnifierIcon,
    'clipboard-check': ShieldCheckIcon,
    'drafting-compass': PenIcon,
    'leaf': GlobeIcon,
    'home': RoofMagnifierIcon,
    'drone': DroneCameraIcon,
};

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{siteData.services.title}</h2>
                    <p className={styles.subtitle}>{siteData.services.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {siteData.services.categories.map((service) => {
                        const IconComponent = IconMap[service.icon] || MagnifierIcon; // Fallback

                        return (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                IconComponent={IconComponent}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
