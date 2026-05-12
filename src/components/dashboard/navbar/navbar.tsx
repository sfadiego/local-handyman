'use client';

import { Button } from '@/components/ui/button';
import { Bell, ChevronDown, Menu, MessageCircle, Search } from 'lucide-react';
import { Avatar } from '../../avatar/avatar';
import MessagesDropdown from './messagesDropdown';
import NavOptions from './navOptions';
import NotificationsDropdown from './notificationsDropdown';
import { useNavbar } from './useNavbar';

const Navbar = () => {
  const nav = useNavbar();
  if (!nav) return null;

  const {
    isMenuOpen,
    toggleMenu,
    isMessagesOpen,
    toggleMessages,
    isNotificationsOpen,
    toggleNotifications,
    user,
    logout,
  } = nav;

  return (
    <header className="topbar">
      <Button
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--charcoal)',
        }}
        id="menuBtn"
      >
        <Menu width={20} height={20} />
      </Button>

      <div className="topbar-search">
        <Search width={15} height={15} />
        <input type="text" placeholder="Busca un servicio o maestro..." />
      </div>

      <div className="topbar-actions">
        <div className="relative notifications-menu-container">
          <div className="icon-btn" onClick={toggleNotifications}>
            <Bell width={15} height={15} />
            <div className="notif-dot"></div>
          </div>
          {isNotificationsOpen && <NotificationsDropdown />}
        </div>
        <div className="relative messages-menu-container">
          <div className="icon-btn" onClick={toggleMessages}>
            <MessageCircle width={15} height={15} />
            <div className="notif-dot"></div>
          </div>
          {isMessagesOpen && <MessagesDropdown />}
        </div>
        <div className="relative avatar-menu-container">
          <div
            onClick={toggleMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              cursor: 'pointer',
            }}
          >
            <Avatar className="user-avatar" style="navbar" />
            <div className="online-dot"></div>
            <ChevronDown
              width={16}
              height={16}
              style={{ color: 'var(--charcoal)' }}
            />
          </div>

          {isMenuOpen && <NavOptions user={user} logout={logout} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
