import {
  Clipboard,
  Gauge,
  Heart,
  History,
  MessageCircle,
  Search,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Sidebar = () => {
  // const { user } = useAuth();
  return (
    <aside className="sidebar" id="sidebar">
      <Link href="/dashboard" className="sidebar-logo">
        oficio<span>.</span>
      </Link>

      <div className="sidebar-section">Principal</div>

      <Button className="nav-item active">
        <span className="nav-icon">
          <Gauge width={15} height={15} />
        </span>
        Dashboard
      </Button>

      <Button className="nav-item">
        <span className="nav-icon">
          <Search width={15} height={15} />
        </span>
        Buscar servicio
      </Button>

      <Button className="nav-item">
        <span className="nav-icon">
          <Clipboard width={15} height={15} />
        </span>
        Mis solicitudes
        <span className="nav-badge">2</span>
      </Button>

      <Button className="nav-item">
        <span className="nav-icon">
          <MessageCircle width={15} height={15} />
        </span>
        Mensajes
        <span className="nav-badge">3</span>
      </Button>

      <Button className="nav-item">
        <span className="nav-icon">
          <History width={15} height={15} />
        </span>
        Historial
      </Button>

      <Button className="nav-item">
        <span className="nav-icon">
          <Heart width={15} height={15} />
        </span>
        Favoritos
      </Button>

      <div className="sidebar-section" style={{ marginTop: '.5rem' }}>
        Cuenta
      </div>

      <Button className="nav-item">
        <span className="nav-icon">
          <User width={15} height={15} />
        </span>
        Mi perfil
      </Button>

      <Button className="nav-item">
        <span className="nav-icon">
          <Settings width={15} height={15} />
        </span>
        Configuración
      </Button>

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
