"use client";

import { useMemo, useState } from 'react';
import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import styles from './projects.module.css';

const projects = [
  {
    title: 'COPELAND CANADA',
    address: '145 Sherwood Drive, Brantford, ON N3T 5S7',
    category: 'Commercial',
    image: '/images/projects/commercial-copeland.png',
  },
  {
    title: 'BRENTWOOD COLLEGE',
    address: '2735 Mt Baker Road, Mill Bay, BC V8H 1K8',
    category: 'Commercial',
    image: '/images/projects/commercial-brentwood.png',
  },
  {
    title: 'Toronto Public Library – Lillian H. Smith Branch',
    address: '239 College Street, Toronto, ON M5T 1R5',
    category: 'Commercial',
    image: '/images/projects/commercial-lillian-smith.jpg',
  },
  {
    title: 'ALECTRA Utilities Operations Centre',
    address: '340 Vansickle Road, St. Catharines, ON L2S 0C9',
    category: 'Industrial',
    image: '/images/projects/industrial-alectra.png',
  },
  {
    title: 'CGC Inc.',
    address: '55 Third Line, Hagersville, ON N0A 1H0',
    category: 'Industrial',
    image: '/images/projects/industrial-cgc.png',
  },
  {
    title: 'Local address, Toronto ON',
    address: 'Toronto, ON',
    category: 'Residential',
    image: '/images/projects/residential-toronto.png',
  },
  {
    title: 'Local address, London ON',
    address: 'London, ON',
    category: 'Residential',
    image: '/images/projects/residential-london.png',
  },
  {
    title: 'Local address, Calgary AB',
    address: 'Calgary, AB',
    category: 'Residential',
    image: '/images/projects/residential-calgary.jpg',
  },
];

const filters = ['All', 'Commercial', 'Residential', 'Industrial'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <main>
      <Header />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>Browse our work by category.</p>

          <div className={styles.filters}>
            {filters.map(f => (
              <button
                key={f}
                className={`${styles.filter} ${filter === f ? styles.filterActive : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {visible.map(project => (
              <div key={project.title} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardAddress}>{project.address}</p>
                  <span className={styles.badge}>{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
