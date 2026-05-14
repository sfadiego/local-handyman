export default function CTASection() {
  return (
    <section
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2rem 2rem 5rem',
      }}
    >
      <div className="cta-section">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="section-label"
            style={{ color: 'rgba(245,158,11,0.8)', marginBottom: '1rem' }}
          >
            ¿Listo?
          </div>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(2rem,5vw,3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '1rem',
            }}
          >
            Tu próximo servicio
            <br />
            está a un clic.
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              marginBottom: '2rem',
            }}
          >
            Únete a miles de personas que ya encontraron su maestro de
            confianza.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href="#" className="btn-amber">
              Buscar servicio ahora
            </a>
            <a
              href="#"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.85rem 0',
              }}
            >
              ¿Eres maestro? Regístrate →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
