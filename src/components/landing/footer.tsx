import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'Privacidad', href: '#privacidad' },
  { label: 'Términos', href: '#terminos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Oficio. Hecho con ❤️ en México.`;
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Tu guia';
  return (
    <footer
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        borderTop: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div className="nav-logo">
        {appName}
        <span>.</span>
      </div>
      <div
        style={{
          fontSize: '0.82rem',
          color: 'var(--warm-gray)',
        }}
      >
        {footerText}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
        }}
      >
        {FOOTER_LINKS.map((link, key) => (
          <Link
            key={key}
            style={{
              fontSize: '0.82rem',
              color: 'var(--warm-gray)',
              textDecoration: 'none',
            }}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
