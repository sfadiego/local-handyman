import React from 'react';

export default function HeroFloatingCards() {
  return (
    <>
      <div
        style={{ position: 'relative', height: '480px', display: 'block' }}
        id="heroCards"
      >
        <div
          className="float-card"
          style={{
            position: 'absolute',
            top: '40px',
            left: '20px',
            width: '260px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'white',
                fontWeight: '700',
              }}
            >
              JM
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: '700',
                  fontSize: '0.95rem',
                }}
              >
                Juan Morales
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--warm-gray)',
                }}
              >
                Plomero · 8 años exp.
              </div>
            </div>
            <div className="online-dot" style={{ marginLeft: 'auto' }}></div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.75rem',
            }}
          >
            <span className="star">★★★★★</span>
            <span style={{ fontSize: '0.82rem', fontWeight: '600' }}>4.97</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>
              (143 reseñas)
            </span>
          </div>
          <div className="badge-verified">✓ Maestro Verificado</div>
          <div
            style={{
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: '1.1rem',
                fontWeight: '700',
              }}
            >
              $250
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  color: 'var(--warm-gray)',
                }}
              >
                /hr
              </span>
            </span>
            <button
              className="btn-amber"
              style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
            >
              Contratar
            </button>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '10px',
            background: 'var(--charcoal)',
            color: 'white',
            borderRadius: '16px',
            padding: '0.9rem 1.2rem',
            width: '200px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              opacity: '0.6',
              marginBottom: '0.3rem',
            }}
          >
            Nueva solicitud
          </div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: '700',
              fontSize: '0.9rem',
            }}
          >
            Fuga de agua 🚰
          </div>
          <div
            style={{
              fontSize: '0.78rem',
              opacity: '0.7',
              marginTop: '0.25rem',
            }}
          >
            Hace 2 min · 1.2km
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '0px',
            background: 'white',
            borderRadius: '16px',
            padding: '0.9rem 1.2rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            width: '185px',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--warm-gray)',
              marginBottom: '0.3rem',
            }}
          >
            Reseña nueva ⭐
          </div>
          <div style={{ fontSize: '0.82rem', fontWeight: '500' }}>
            "Excelente trabajo, muy puntual"
          </div>
          <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.2rem' }}>
            <span style={{ fontSize: '1rem' }}>★★★★★</span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '30px',
            background: 'var(--amber)',
            color: 'var(--charcoal)',
            borderRadius: '12px',
            padding: '0.6rem 1rem',
            fontSize: '0.82rem',
            fontWeight: '700',
            fontFamily: "'Syne',sans-serif",
            boxShadow: '0 4px 15px rgba(245,158,11,0.4)',
          }}
        >
          📍 3 maestros cerca
        </div>
      </div>
    </>
  );
}
