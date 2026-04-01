import { Inter } from 'next/font/google';
import '../auth/auth.css';

export const metadata = {
  title: 'Local Handyman - Autenticación',
  description: 'Inicia sesión o regístrate para acceder a tu cuenta y gestionar tus servicios.',
};

const inter = Inter({ subsets: ['latin'] });

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
