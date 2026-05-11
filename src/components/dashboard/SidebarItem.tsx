'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DynamicIcon } from '../icons/client-icons';

interface NavItemProps {
  route: string;
  label: string;
  icon: string;
}
const SidebarItem = ({ route, label, icon }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <Link href={route} className={`nav-item ${isActive ? 'active' : ''}`}>
      <span className="nav-icon">
        <DynamicIcon icon={icon} />
      </span>
      {label}
    </Link>
  );
};

export default SidebarItem;
