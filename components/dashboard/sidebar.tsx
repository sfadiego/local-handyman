'use client';

import { ProviderRoutes, menuItems } from '@/routes/routes';
import { UserRole } from '@prisma/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DynamicIcon } from '../icons/client-icons';

export const Sidebar = () => {
  const pathname = usePathname();
  // const { user } = useAuthContext();
  return (
    <aside className="sidebar" id="sidebar">
      <Link href={`${ProviderRoutes.DASHBOARD}`} className="sidebar-logo">
        oficio<span>.</span>
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
          <div className="user-avatar">LS</div>
          <div>
            <div className="user-name">Laura Castillo</div>
            <div className="user-role">Cliente · Villa de Álvarez</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
