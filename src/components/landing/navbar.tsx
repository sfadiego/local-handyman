import { AuthRoutes } from '@/routes/paths';
import Link from 'next/link';

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Maestros', href: '#maestros' },
  { label: 'Precios', href: '#precios' },
];

export default function Navbar() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Tu guia';
  return (
    <nav>
      <div className="nav-logo">
        {appName}
        <span>.</span>
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
          href={AuthRoutes.AUTH}
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--warm-gray)',
            textDecoration: 'none',
          }}
        >
          Iniciar sesión
        </Link>
        <Link href={AuthRoutes.AUTH} className="btn-primary">
          Registrarse
        </Link>
      </div>
    </nav>
  );
}
