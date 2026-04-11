'use client';
import { LoginTabs, UserRole } from '@/types/auth';
import { useState } from 'react';

export function useAuth() {
  const [currentTab, setCurrentTab] = useState<LoginTabs>('login');
  const [loginRole, setLoginRole] = useState<UserRole>(UserRole.client);
  const [registerRole, setRegisterRole] = useState<UserRole>(UserRole.client);

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
