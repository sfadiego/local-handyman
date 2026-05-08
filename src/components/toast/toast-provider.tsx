// components/toast-provider.tsx
'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      style={{
        zIndex: 999999,
        position: 'fixed',
      }}
    />
  );
}
