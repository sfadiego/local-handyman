import { menuItems, ProviderRoutes } from '@/routes/paths';
import { UserRole } from '@prisma/client';
import Link from 'next/link';
import UserAvatar from '../avatar/user-avatar';
import SidebarItem from './SidebarItem';

export const Sidebar = async () => {
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
                return (
                  <SidebarItem
                    key={subKey}
                    route={subItem.route}
                    label={subItem.label}
                    icon={subItem.icon}
                  />
                );
              })}
          </div>
        );
      })}

      <div className="sidebar-bottom">
        <UserAvatar />
      </div>
    </aside>
  );
};
