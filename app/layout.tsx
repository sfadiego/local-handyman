import { AuthProvider } from '@/contexts/auth-context';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Local Handyman - Servicios locales cerca de ti',
  description: 'Encuentra profesionales verificados para servicios de plomería, electricidad, limpieza y más en tu área local.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        {/* <script src="/dashboard/animations.js" /> */}
      </body>
    </html>
  );
}
