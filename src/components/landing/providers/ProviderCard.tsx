import { Provider } from '../FeaturedProviders';
import React from 'react';
const ProviderCard = ({ provider }: { provider: Provider }) => {
  return (
    <div className="profile-card">
      <div
        style={{
          height: '90px',
          background: 'linear-gradient(135deg,#1C1917,#44403C)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-28px',
            left: '1.5rem',
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg,#F59E0B,#D97706)',
            borderRadius: '50%',
            border: '3px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            color: 'white',
            fontWeight: '800',
          }}
        >
          {provider.initials}
        </div>
      </div>
      <div
        style={{
          padding: '2.25rem 1.5rem 1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.25rem',
          }}
        >
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
            }}
          >
            {provider.name}
          </div>
          <div className="online-dot"></div>
        </div>
        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--warm-gray)',
            marginBottom: '0.6rem',
          }}
        >
          {provider.trade} · {provider.location}
        </div>
        <div
          className="badge-verified"
          style={{
            marginBottom: '0.75rem',
          }}
        >
          ✓ Verificado
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '1rem',
          }}
        >
          <span className="star">★★★★★</span>
          <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>
            {provider.rating}
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--warm-gray)',
            }}
          >
            · {provider.jobs} trabajos
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <span
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
            }}
          >
            {provider.workType === 'hour' && (
              <>
                ${provider.rate}
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 400,
                    color: 'var(--warm-gray)',
                  }}
                >
                  /hr
                </span>
              </>
            )}
            {provider.workType === 'project' && (
              <>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 400,
                    color: 'var(--warm-gray)',
                  }}
                >
                  /project
                </span>
              </>
            )}
          </span>
          <button
            className="btn-primary"
            style={{
              fontSize: '0.8rem',
              padding: '0.45rem 1rem',
            }}
          >
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
