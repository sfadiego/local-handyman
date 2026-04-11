import { Button } from '@/components/ui/button';
import { Bell, Menu, MessageCircle, Search } from 'lucide-react';

const Header = () => {
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
        <div className="icon-btn">
          <Bell width={15} height={15} />
          <div className="notif-dot"></div>
        </div>
        <div className="icon-btn">
          <MessageCircle width={15} height={15} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            cursor: 'pointer',
          }}
        >
          <div
            className="user-avatar"
            style={{ width: '32px', height: '32px', fontSize: '.75rem' }}
          >
            LC
          </div>
          <div className="online-dot"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
