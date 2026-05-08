import { UserRole } from '@prisma/client';
import {
  Clipboard,
  Gauge,
  Heart,
  History,
  LucideIcon,
  MessageCircle,
  Search,
  Settings,
  User,
} from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  route: string;
  category?: string;
  role: UserRole[];
}
export interface MenuCategories {
  key: string;
  value: MenuItem[];
}

export enum AuthRoutes {
  AUTH = '/auth',
}

export enum ProviderRoutes {
  DASHBOARD = '/provider/dashboard',
  USERS = '/provider/users',
  SERVICES = '/provider/services',
  REQUESTS = '/provider/requests',
  MESSAGES = '/provider/messages',
  HISTORY = '/provider/history',
  FAVORITES = '/provider/favorites',
  PROFILE = '/provider/profile',
  SETTINGS = '/provider/settings',
}

/**
 * Menu items for the application
 * Each item has an icon, label, href, and role
 * The role array defines which user roles can see this menu item
 */

export const menuItems: MenuCategories[] = [
  {
    key: 'principal',
    value: [
      {
        icon: Gauge,
        label: 'Dashboard',
        route: ProviderRoutes.DASHBOARD,
        role: [UserRole.customer, UserRole.provider],
      },
      {
        icon: Search,
        label: 'Buscar servicio',
        route: ProviderRoutes.SERVICES,
        role: [UserRole.customer, UserRole.provider],
      },
      {
        icon: Clipboard,
        label: 'Mis solicitudes',
        route: ProviderRoutes.REQUESTS,
        role: [UserRole.customer, UserRole.provider],
      },
      {
        icon: MessageCircle,
        label: 'Mensajes',
        route: ProviderRoutes.MESSAGES,
        role: [UserRole.customer, UserRole.provider],
      },
      {
        icon: History,
        label: 'Historial',
        route: ProviderRoutes.HISTORY,
        role: [UserRole.customer, UserRole.provider],
      },
      {
        icon: Heart,
        label: 'Favoritos',
        route: ProviderRoutes.FAVORITES,
        role: [UserRole.customer, UserRole.provider],
      },
      {
        icon: User,
        label: 'Mi perfil',
        route: ProviderRoutes.PROFILE,
        role: [UserRole.customer, UserRole.provider],
      },
    ],
  },
  {
    key: 'configuration',
    value: [
      {
        icon: Settings,
        label: 'Configuración',
        route: ProviderRoutes.SETTINGS,
        role: [UserRole.customer, UserRole.provider],
      },
    ],
  },
];
