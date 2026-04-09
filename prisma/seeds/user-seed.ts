import { UserRole } from '@prisma/client';

export const userSeed = [
  {
    fullName: 'Admin Tuguiapro',
    email: 'admin@tuguiapro.com',
    phone: '+56912345678',
    passwordHash: 'password',
    role: UserRole.provider,
    avatarUrl: null,
    lat: null,
    lng: null,
    city: 'Colima',
  },
  {
    fullName: 'Cliente Tuguiapro',
    email: 'cliente@tuguiapro.com',
    phone: '+56912345678',
    passwordHash: 'password',
    role: UserRole.client,
    avatarUrl: null,
    lat: null,
    lng: null,
    city: 'Colima',
  },
];
