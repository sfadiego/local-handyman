import React from 'react';
const steps = [
  {
    number: '01',
    icon: '🔍',
    title: 'Describe tu problema',
    description:
      'Cuéntanos qué necesitas. Puede ser tan simple como "se me fue el agua" o "se fundió un foco".',
  },
  {
    number: '02',
    icon: '📍',
    title: 'Encuentra maestros cerca',
    description:
      'Te mostramos maestros verificados en tu zona con disponibilidad inmediata, reseñas y precio estimado.',
  },
  {
    number: '03',
    icon: '💬',
    title: 'Acuerda y agenda',
    description:
      'Chatea directamente con el maestro, acuerda el precio y agenda la visita desde la app.',
  },
  {
    number: '04',
    icon: '⭐',
    title: 'Paga y califica',
    description:
      'Paga de forma segura a través de la plataforma y deja tu reseña para ayudar a la comunidad.',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="section-label">Proceso</div>
        <h2 className="section-title">
          Tan fácil como
          <br />
          pedir un taxi
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
          gap: '1.5rem',
        }}
      >
        {steps.map((step, key) => (
          <div className="step-card" key={key}>
            <div className="step-num">{step.number}</div>
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'rgba(245,158,11,0.12)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1rem',
              }}
            >
              {step.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--warm-gray)',
                lineHeight: 1.6,
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
