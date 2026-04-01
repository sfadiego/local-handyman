import { ReactNode } from 'react';

interface IServiciosCard {
  title: string;
  description: string;
  available: number;
  icon: ReactNode;
}
export const ServiciosCard = ({ title, description, available, icon }: IServiciosCard) => {
  return (
    <div className="service-card">
      <div className="service-icon" style={{ background: 'rgba(59,130,246,0.1)' }}>
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: '700',
            marginBottom: '0.25rem',
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>{description}</div>
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: '600',
            color: 'var(--amber-dark)',
            marginTop: '0.5rem',
          }}
        >
          {available} maestros disponibles
        </div>
      </div>
    </div>
  );
};
