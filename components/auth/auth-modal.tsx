'use client';

import { RoleEnum, RoleType } from '@/enums/roleEnum';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultForm?: 'login' | 'register';
}

export function AuthModal({
  open,
  onOpenChange,
  defaultForm = 'login',
}: AuthModalProps) {
  const [currentTab, setCurrentTab] = useState<'login' | 'register'>(
    defaultForm
  );
  const [loginRole, setLoginRole] = useState<RoleType>('client');
  const [registerRole, setRegisterRole] = useState<RoleType>('client');

  const switchTab = (tab: 'login' | 'register') => {
    setCurrentTab(tab);
  };

  const selectLoginRole = (role: RoleType) => setLoginRole(role);
  const selectRegisterRole = (role: RoleType) => setRegisterRole(role);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <div className="right-panel bg-white rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
          {currentTab === 'login' ? (
            <LoginForm
              loginRole={loginRole}
              switchTab={switchTab}
            />
          ) : (
            <RegisterForm
              selectRegisterRole={selectRegisterRole}
              registerRole={registerRole}
              switchTab={switchTab}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
