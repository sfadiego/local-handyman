'use client';

import { Button } from '@/components/ui/button';
import { TokenPayload } from '@/lib/jwt';
import { LogOut, User as UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface NavOptionsProps {
  user: TokenPayload;
  logout: () => void;
}
const NavOptions = ({ user, logout }: NavOptionsProps) => {
  const router = useRouter();
  const navOptions = [
    {
      label: 'Perfil',
      icon: UserIcon,
      onClick: () => router.push('/profile'),
    },
    {
      label: 'Cerrar sesión',
      icon: LogOut,
      onClick: logout,
    },
  ];
  return (
    <div
      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        zIndex: 50,
      }}
    >
      <div className="py-2">
        <div className="px-4 py-2 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-900">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
        {navOptions.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.label}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              onClick={item.onClick}
            >
              <Icon width={16} height={16} />
              {item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavOptions;
