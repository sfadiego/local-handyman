'use client';
import { LoginTabs, UserRole } from '@/types/auth';
import { useState } from 'react';

export function useAuth() {
  const [currentTab, setCurrentTab] = useState<LoginTabs>('login');
  const [registerRole, setRegisterRole] = useState<UserRole>(UserRole.customer);

  const switchTab = (tab: LoginTabs) => setCurrentTab(tab);

  const selectRegisterRole = (role: UserRole) => setRegisterRole(role);

  const socialLogin = (provider: string) => {
    console.log(`Integración con ${provider} próximamente.`);
  };

  return {
    currentTab,
    registerRole,
    switchTab,
    selectRegisterRole,
    socialLogin,
  };
}
