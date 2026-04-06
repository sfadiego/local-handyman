import Link from 'next/link';

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Maestros', href: '#maestros' },
  { label: 'Precios', href: '#precios' },
];

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        oficio<span>.</span>
      </div>
      <div className="nav-links">
        {navItems.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center',
        }}
      >
        <Link
          href="/auth"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--warm-gray)',
            textDecoration: 'none',
          }}
        >
          Iniciar sesión
        </Link>
        <Link href="/auth" className="btn-primary">
          Registrarse
        </Link>
      </div>
    </nav>
  );
}
