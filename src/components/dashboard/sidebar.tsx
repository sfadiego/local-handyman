'use client';

import { TokenPayload } from '@/lib/jwt';
import { menuItems, ProviderRoutes } from '@/routes/paths';
import { UserRole } from '@prisma/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar } from '../avatar/avatar';
import AvatarInfo from '../avatar/avatar-info';
import AvatarLocation from '../avatar/avatar-location';
import { DynamicIcon } from '../icons/client-icons';

interface ISidebar {
  user: TokenPayload;
}

export const Sidebar = ({ user }: ISidebar) => {
  const pathname = usePathname();
  const initials = `${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`;
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Tu guia';
  return (
    <aside className="sidebar" id="sidebar">
      <Link href={`${ProviderRoutes.DASHBOARD}`} className="sidebar-logo">
        {appName}
        <span>.</span>
      </Link>
      {menuItems.map((item, key) => {
        return (
          <div key={key}>
            <div className="sidebar-section" style={{ marginTop: '.5rem' }}>
              {item.key}
            </div>
            {item.value
              .filter(
                (subItem) =>
                  subItem.role.includes(UserRole.customer) ||
                  subItem.role.includes(UserRole.provider)
              )
              .map((subItem, subKey) => {
                const isActive = pathname === subItem.route;
                const Icon = subItem.icon;
                return (
                  <Link
                    key={subKey}
                    href={subItem.route}
                    className={`nav-item ${isActive ? 'active' : ''}`}
                  >
                    <span className="nav-icon">
                      <DynamicIcon icon={Icon} />
                    </span>
                    {subItem.label}
                  </Link>
                );
              })}
          </div>
        );
      })}
      <div className="sidebar-bottom">
        <div className="user-pill">
          <Avatar
            className="user-avatar"
            name={initials}
            useDefaultStyle={false}
          />
          <div>
            <AvatarInfo
              name={`${user?.firstName} ${user?.lastName}`}
              className="user-name"
            />
            <AvatarLocation text="Cliente · Villa de Álvarez" />
          </div>
        </div>
      </div>
    </aside>
  );
};
