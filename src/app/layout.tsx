import { ToastProvider } from '@/components/toast/toast-provider';
import type { Metadata } from 'next';
import React from 'react';
import './(protected)/dashboard.css';
import './auth/auth.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Local Handyman - Servicios locales cerca de ti',
  description:
    'Encuentra profesionales verificados para servicios de plomería, electricidad, limpieza y más en tu área local.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
