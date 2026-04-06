'use client';
import { RoleEnum, RoleType } from '@/enums/roleEnum';
import { useState } from 'react';

export type LoginTabs = 'login' | 'register' | 'success';

export function useAuth() {
  const [currentTab, setCurrentTab] = useState<LoginTabs>('login');
  const [loginRole, setLoginRole] = useState<RoleType>(RoleEnum.CLIENT);
  const [registerRole, setRegisterRole] = useState<RoleType>(RoleEnum.CLIENT);

  const switchTab = (tab: LoginTabs) => setCurrentTab(tab);

  const selectLoginRole = (role: RoleType) => setLoginRole(role);
  const selectRegisterRole = (role: RoleType) => setRegisterRole(role);

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
