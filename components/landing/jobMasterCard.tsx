export const JobMasterCard = () => {
  return (
    <div className="card-container dark">
      <div
        style={{
          width: '52px',
          height: '52px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        🔧
      </div>
      <h3
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: '1.6rem',
          fontWeight: 800,
          marginBottom: '0.75rem',
        }}
      >
        Soy maestro
      </h3>
      <p
        style={{
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
        }}
      >
        Deja de depender del boca a boca. Crea tu perfil, define tus horarios y recibe clientes de tu zona directamente en tu celular.
      </p>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          marginBottom: '2rem',
        }}
      >
        <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--amber)' }}>✓</span> Gratis para registrarse
        </li>
        <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--amber)' }}>✓</span> Tú pones tus precios
        </li>
        <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--amber)' }}>✓</span> Acepta o rechaza solicitudes
        </li>
        <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--amber)' }}>✓</span> Cobra más con el sello verificado
        </li>
      </ul>
      <a href="#" className="btn-amber">
        Registrar mi oficio
      </a>
    </div>
  );
};
