import { AuthProvider } from '@/contexts/auth-context';
import type { Metadata } from 'next';
import React from 'react';
import './auth.css';

export const metadata: Metadata = {
  title: 'Local Handyman - Servicios locales cerca de ti',
  description:
    'Encuentra profesionales verificados para servicios de plomería, electricidad, limpieza y más en tu área local.',
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
