import React from 'react';
import {
  Cloud,
  Glasses,
  Hammer,
  Leaf,
  Lock,
  Palette,
  Wrench,
  Zap,
} from 'lucide-react';

const services = [
  { icon: <Wrench />, label: 'Plomería' },
  { icon: <Zap />, label: 'Electricidad' },
  { icon: <Hammer />, label: 'Carpintería' },
  { icon: <Palette />, label: 'Pintura' },
  { icon: <Hammer />, label: 'Albañilería' },
  { icon: <Cloud />, label: 'Aire acondicionado' },
  { icon: <Lock />, label: 'Cerrajería' },
  { icon: <Leaf />, label: 'Jardinería' },
  { icon: <Glasses />, label: 'Vidriería' },
  { icon: <Hammer />, label: 'Remodelaciones' },
];

export default function ServicesMarquee() {
  const items = [...services, ...services];

  return (
    <div
      style={{
        background: 'white',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((service, i) => (
            <div key={i} className="marquee-item">
              <span>{service.icon}</span>
              <span>{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
