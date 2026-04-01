export const Header = () => {
  return (
    <nav>
      <div className="nav-logo">
        oficio<span>.</span>
      </div>
      <div className="nav-links">
        <a href="#">Servicios</a>
        <a href="#">Cómo funciona</a>
        <a href="#">Maestros</a>
        <a href="#">Precios</a>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <a
          href="oficio-auth.html"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--warm-gray)',
            textDecoration: 'none',
          }}
        >
          Iniciar sesión
        </a>
        <a href="oficio-auth.html" className="btn-primary">
          Registrarse
        </a>
      </div>
    </nav>
  );
};
