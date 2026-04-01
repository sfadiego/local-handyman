interface IProfileQualifiedCardProps {
  name: string;
  specialty: string;
  location: string;
  verified: boolean;
  price: number;
  worksmade: number;
}

export const ProfileQualifiedCard = ({ name, specialty, location, verified, price, worksmade }: IProfileQualifiedCardProps) => {
  // calcular en base a calificaciones
  const rating = 4.97;
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
          {/* TODO:revisar */}
          {name.split(' ')[0].charAt(0)}
        </div>
      </div>
      <div style={{ padding: '2.25rem 1.5rem 1.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.25rem',
          }}
        >
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>{name}</div>
          <div className="online-dot"></div>
        </div>
        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--warm-gray)',
            marginBottom: '0.6rem',
          }}
        >
          {specialty} · {location}
        </div>
        {verified && (
          <div className="badge-verified" style={{ marginBottom: '0.75rem' }}>
            ✓ Verificado
          </div>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '1rem',
          }}
        >
          <span className="star">★★★★★</span>
          <span style={{ fontSize: '0.82rem', fontWeight: '700' }}>{rating}</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>· {worksmade} trabajos</span>
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
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>
            ${price}
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: '400',
                color: 'var(--warm-gray)',
              }}
            >
              /hr
            </span>
          </span>
          <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}>
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
};
