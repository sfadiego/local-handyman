import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { AuthProvider } from '@/contexts/auth-context';

export const metadata: Metadata = {
  title: 'Local Handyman - Servicios locales cerca de ti',
  description:
    'Encuentra profesionales verificados para servicios de plomería, electricidad, limpieza y más en tu área local.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
