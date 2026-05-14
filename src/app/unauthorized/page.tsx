// app/unauthorized/page.tsx
import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div>
      <h1>No tienes permiso para acceder a esta página</h1>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}
