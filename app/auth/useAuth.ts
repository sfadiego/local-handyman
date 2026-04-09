'use client';
import type { UserRole } from '@prisma/client';
import { useState } from 'react';

export type LoginTabs = 'login' | 'register' | 'success';

export function useAuth() {
  const [currentTab, setCurrentTab] = useState<LoginTabs>('login');
  const [loginRole, setLoginRole] = useState<UserRole>('client');
  const [registerRole, setRegisterRole] = useState<UserRole>('client');

  const switchTab = (tab: LoginTabs) => setCurrentTab(tab);

  const selectLoginRole = (role: UserRole) => setLoginRole(role);
  const selectRegisterRole = (role: UserRole) => setRegisterRole(role);

  const socialLogin = (provider: string) => {
    console.log(`Integración con ${provider} próximamente.`);
  };

  return {
    currentTab,
    loginRole,
    registerRole,
    switchTab,
    selectLoginRole,
    selectRegisterRole,
    socialLogin,
  };
}
