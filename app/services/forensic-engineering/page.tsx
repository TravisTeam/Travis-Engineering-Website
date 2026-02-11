"use client";

import { useState } from 'react';
import Header from '@/components/home/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import ForensicPdfSlideshow from '@/components/ForensicPdfSlideshow';
import styles from '../engineering-design/engineering-design.module.css';

const items = [
  {
    id: 'electrical',
    label: 'Electrical',
    text: 'Our electrical forensic team investigates power system failures, arc events, overheating, and equipment breakdowns. We trace the sequence of failure, document code compliance, and provide clear, defensible opinions that support insurers, legal teams, and owners.'
  },
  {
    id: 'mechanical',
    label: 'Mechanical',
    text: 'We analyze mechanical system breakdowns, vibration issues, and component wear across HVAC, pumps, motors, and process equipment. Findings identify root cause and outline corrective actions to prevent recurrence.'
  },
  {
    id: 'structural-civil',
    label: 'Structural/Civil',
    text: 'From foundations to framing, we evaluate structural capacity, load paths, and failure mechanisms with defensible conclusions. Reports include repair strategies and documentation suitable for claims and litigation.'
  },
  {
    id: 'fire-explosion',
    label: 'Fire and Explosion',
    text: 'Origin-and-cause investigations using burn pattern analysis, material evaluation, and evidence preservation. We deliver a clear timeline of events and a comprehensive report for insurers and legal counsel.'
  },
  {
    id: 'cause',
    label: 'Cause',
    text: 'We provide unbiased cause determinations supported by data, testing, and site conditions. Each assessment includes photographic evidence and clear reasoning that withstands scrutiny.'
  },
  {
    id: 'contract-disputes',
    label: 'Contract Disputes',
    text: 'Independent technical opinions for scope, workmanship, and standards of care. We review documentation, inspect conditions, and compare findings against codes and specifications.'
  },
  {
    id: 'damage-assessments',
    label: 'Damage Assessments',
    text: 'Detailed damage mapping, repair scopes, and cost implications for insurers and stakeholders. We focus on extent, severity, and practical repair pathways.'
  },
  {
    id: 'insurance-claims',
    label: 'Insurance Claims',
    text: 'Field investigations, documentation, and expert reports tailored to claims and coverage requirements. This helps carriers and adjusters make faster, confident decisions.'
  },
  {
    id: 'wind-hail-water-fire',
    label: 'Wind, Hail, Water, Fire',
    text: 'Weather-related damage assessments with forensic documentation and repair recommendations. We separate storm damage from pre-existing conditions.'
  },
  {
    id: 'structural',
    label: 'Structural',
    text: 'Structural stability reviews, shoring guidance, and repair strategies for safe occupancy. We assess immediate risks and provide stepwise recommendations.'
  },
  {
    id: 'consulting',
    label: 'Consulting',
    text: 'Expert consulting to support risk management, asset planning, and complex project decisions. Each engagement is tailored to client operational and technical needs.'
  },
];

export default function ForensicEngineeringPage() {
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find(i => i.id === activeId) ?? items[0];

  return (
    <main>
      <Header />
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h1 className={styles.title}>Forensic Engineering</h1>
              <p className={styles.copy}>
                We specialize in forensic engineering services to investigate and analyze structural failures,
                accidents, and other engineering-related issues.
              </p>

              <div className={styles.capabilitiesTitle}>Specialties</div>
              <div className={styles.capabilities}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={styles.capability}
                    onClick={() => setActiveId(item.id)}
                    role="button"
                    tabIndex={0}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

            </div>

            <div>
              <div className={styles.capabilitiesTitle}>Forensic Engineering</div>
              <ForensicPdfSlideshow />
              <h2 className={styles.detailTitle}>{active.label}</h2>
              <p className={styles.detailText}>{active.text}</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
