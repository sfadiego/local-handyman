interface ICustomerCardProps {
  title: string;
  description: string;
  style: 'dark' | 'light';
}
export const CustomerCard = ({ title, description, style = 'light' }: ICustomerCardProps) => {
  return (
    <div className={`card-container ${style === 'dark' ? 'dark' : 'light'}`}>
      <div
        style={{
          width: '52px',
          height: '52px',
          background: 'rgba(245,158,11,0.12)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        🏠
      </div>
      <h3
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: '1.6rem',
          fontWeight: 800,
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: 'var(--warm-gray)',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
        }}
      >
        {description}
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
          <span style={{ color: 'var(--amber)' }}>✓</span> Perfil con fotos del trabajo previo
        </li>
        <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--amber)' }}>✓</span> Chat directo con el maestro
        </li>
        <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--amber)' }}>✓</span> Pago seguro en la app
        </li>
        <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--amber)' }}>✓</span> Garantía de satisfacción
        </li>
      </ul>
      <a href="#" className="btn-amber">
        Buscar un maestro
      </a>
    </div>
  );
};
