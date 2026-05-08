import ProviderCard from './providers/ProviderCard';
import React from 'react';
export type WorkType = 'hour' | 'project';
export interface Provider {
  initials: string;
  name: string;
  trade: string;
  location: string;
  rating: number;
  jobs: number;
  rate: number;
  workType: WorkType;
  isOnline: boolean;
  gradient: string;
  headerBg: string;
}

const providers: Provider[] = [
  {
    initials: 'JM',
    name: 'Juan Morales',
    trade: 'Plomero',
    location: 'Colima, Col.',
    rating: 4.97,
    jobs: 143,
    rate: 250,
    workType: 'hour',
    isOnline: true,
    gradient: 'from-amber-400 to-amber-600',
    headerBg: 'bg-gradient-to-br from-stone-900 to-stone-700',
  },
  {
    initials: 'RG',
    name: 'Rosa García',
    trade: 'Electricista',
    location: 'Manzanillo',
    rating: 4.95,
    jobs: 98,
    rate: 300,
    workType: 'project',
    isOnline: true,
    gradient: 'from-blue-400 to-blue-600',
    headerBg: 'bg-gradient-to-br from-blue-900 to-blue-700',
  },
  {
    initials: 'CA',
    name: 'Carlos Ávila',
    trade: 'Carpintero',
    location: 'Villa de Álvarez',
    rating: 4.93,
    jobs: 211,
    rate: 200,
    workType: 'hour',
    isOnline: false,
    gradient: 'from-emerald-400 to-emerald-600',
    headerBg: 'bg-gradient-to-br from-emerald-900 to-emerald-700',
  },
];

export default function FeaturedProviders() {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="section-label">Comunidad</div>
        <h2 className="section-title">
          Maestros mejor
          <br />
          calificados
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
          gap: '1.5rem',
        }}
      >
        {providers.map((provider) => (
          <ProviderCard provider={provider} key={provider.initials} />
        ))}
      </div>
    </section>
  );
}
