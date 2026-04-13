import { ActiveRequestList } from '@/app/dashboard/activeRequest/active-request-list';
import {
  CheckSquare,
  LucideIcon,
  MessageCircleMore,
  Plus,
  Star,
  Wrench,
} from 'lucide-react';
import DashboardCard from '../card/dashboard-card';
import { Button } from '../ui/button';

export const Content = () => {
  const cards: {
    icon: LucideIcon;
    number: string;
    label: string;
    change: string;
    className: string;
    variant: string;
  }[] = [
    {
      icon: Wrench,
      number: '8',
      label: 'Servicios contratados',
      change: '↑ 2 este mes',
      className: 'fu d1',
      variant: 'default',
    },
    {
      icon: CheckSquare,
      number: '6',
      label: 'Completados',
      change: '100% satisfacción',
      className: 'fu d2',
      variant: 'success',
    },
    {
      icon: MessageCircleMore,
      number: '6',
      label: 'Mensajes nuevos',
      change: '2 maestros',
      className: 'fu d3',
      variant: 'neutral',
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Tu calificación media',
      change: '↑ muy buena',
      className: 'accent fu d4',
      variant: 'dark',
    },
  ];
  return (
    <>
      <div className="content">
        <div className="page-header fu">
          <div>
            <div className="greeting-label">Martes 26 de marzo, 2026</div>
            <h1 className="greeting-title">¡Buenos días, Laura! ☀️</h1>
            <p className="greeting-sub">
              Tienes 2 solicitudes activas y 1 servicio pendiente de calificar.
            </p>
          </div>
          <Button className="btn-new-request">
            <Plus width={14} height={14} />
            Nueva solicitud
          </Button>
        </div>

        <div className="stats-grid">
          {cards.map((card, index) => {
            return (
              <DashboardCard
                key={index}
                Icon={card.icon}
                number={card.number}
                label={card.label}
                change={card.change}
                className={card.className}
                variant={
                  card.variant as 'default' | 'success' | 'neutral' | 'dark'
                }
              />
            );
          })}
        </div>

        <div className="dash-grid">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Solicitudes activas */}
            <ActiveRequestList title="Solicitudes activas" />

            {/* Maestros cerca de ti */}
            <div className="card fu d3">
              <div className="card-header">
                <div className="card-title">Maestros cerca de ti</div>
                <a href="#" className="card-link">
                  Ver mapa →
                </a>
              </div>

              <div className="maestro-card">
                <div
                  className="m-avatar"
                  style={{
                    background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                  }}
                >
                  JM
                  <div className="m-online"></div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="m-name">Juan Morales</div>
                  <div className="m-trade">Plomero · 8 años exp.</div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '.5rem',
                      marginTop: '.2rem',
                    }}
                  >
                    <div className="m-stars">★★★★★</div>
                    <div className="m-dist">1.2 km</div>
                  </div>
                </div>
                <Button className="btn-hire">Contratar</Button>
              </div>

              <div className="maestro-card">
                <div
                  className="m-avatar"
                  style={{
                    background: 'linear-gradient(135deg,#3B82F6,#2563EB)',
                  }}
                >
                  RG
                  <div className="m-online"></div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="m-name">Rosa García</div>
                  <div className="m-trade">Electricista · 5 años</div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '.5rem',
                      marginTop: '.2rem',
                    }}
                  >
                    <div className="m-stars">★★★★★</div>
                    <div className="m-dist">3.5 km</div>
                  </div>
                </div>
                <Button className="btn-hire">Contratar</Button>
              </div>

              <div className="maestro-card">
                <div
                  className="m-avatar"
                  style={{
                    background: 'linear-gradient(135deg,#10B981,#059669)',
                  }}
                >
                  CA
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="m-name">Carlos Ávila</div>
                  <div className="m-trade">Carpintero · 12 años</div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '.5rem',
                      marginTop: '.2rem',
                    }}
                  >
                    <div className="m-stars">★★★★★</div>
                    <div className="m-dist">0.8 km</div>
                  </div>
                </div>
                <Button className="btn-hire">Contratar</Button>
              </div>

              <div className="maestro-card">
                <div
                  className="m-avatar"
                  style={{
                    background: 'linear-gradient(135deg,#8B5CF6,#7C3AED)',
                  }}
                >
                  MR
                  <div className="m-online"></div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="m-name">Miguel Ramos</div>
                  <div className="m-trade">Pintor · 6 años</div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '.5rem',
                      marginTop: '.2rem',
                    }}
                  >
                    <div className="m-stars">★★★★☆</div>
                    <div className="m-dist">2.1 km</div>
                  </div>
                </div>
                <Button className="btn-hire">Contratar</Button>
              </div>
            </div>
          </div>
          <div className="right-col">
            {/* Acciones rápidas */}
            <div className="card fu d2">
              <div className="card-header">
                <div className="card-title">Acciones rápidas</div>
              </div>
              <div className="qa-grid">
                <Button className="qa-btn" onClick={() => null}>
                  <div className="qa-icon">🔍</div>
                  <div className="qa-label">Pedir servicio</div>
                  <div className="qa-sub">Solicita ahora</div>
                </Button>
                <Button className="qa-btn" onClick={() => null}>
                  <div className="qa-icon">💬</div>
                  <div className="qa-label">Mensajes</div>
                  <div className="qa-sub">3 sin leer</div>
                </Button>
                <Button className="qa-btn" onClick={() => null}>
                  <div className="qa-icon">🕐</div>
                  <div className="qa-label">Historial</div>
                  <div className="qa-sub">8 servicios</div>
                </Button>
                <Button className="qa-btn" onClick={() => null}>
                  <div className="qa-icon">❤️</div>
                  <div className="qa-label">Favoritos</div>
                  <div className="qa-sub">4 maestros</div>
                </Button>
              </div>
            </div>
            {/* Aviso */}
            <div className="promo-banner fu d3">
              <div className="promo-title">¿Eres maestro también?</div>
              <div className="promo-sub">
                Regístrate como proveedor y empieza a recibir clientes en tu
                zona sin costo inicial.
              </div>
              <Button className="btn-promo">Registrar mi oficio →</Button>
            </div>

            {/* Actividad reciente */}
            <div className="card fu d4">
              <div className="card-header">
                <div className="card-title">Actividad reciente</div>
              </div>

              <div className="feed-item">
                <div
                  className="feed-icon"
                  style={{ background: 'rgba(34,197,94,.1)' }}
                >
                  ✅
                </div>
                <div>
                  <div className="feed-text">
                    <strong>Juan Morales</strong> aceptó tu solicitud de
                    plomería.
                  </div>
                  <div className="feed-time">Hace 12 min</div>
                </div>
              </div>

              <div className="feed-item">
                <div
                  className="feed-icon"
                  style={{ background: 'rgba(59,130,246,.1)' }}
                >
                  💬
                </div>
                <div>
                  <div className="feed-text">
                    <strong>Rosa García</strong> te envió un mensaje sobre la
                    instalación.
                  </div>
                  <div className="feed-time">Hace 45 min</div>
                </div>
              </div>

              <div className="feed-item">
                <div
                  className="feed-icon"
                  style={{ background: 'rgba(245,158,11,.1)' }}
                >
                  ⭐
                </div>
                <div>
                  <div className="feed-text">
                    Califica el servicio de <strong>Carlos Ávila</strong> para
                    ayudar a la comunidad.
                  </div>
                  <div className="feed-time">Hace 1 hora</div>
                </div>
              </div>

              <div className="feed-item">
                <div
                  className="feed-icon"
                  style={{ background: 'rgba(100,116,139,.1)' }}
                >
                  🔧
                </div>
                <div>
                  <div className="feed-text">
                    Servicio de carpintería <strong>completado</strong>{' '}
                    exitosamente.
                  </div>
                  <div className="feed-time">Ayer 09:42</div>
                </div>
              </div>

              <div className="feed-item">
                <div
                  className="feed-icon"
                  style={{ background: 'rgba(239,68,68,.1)' }}
                >
                  📍
                </div>
                <div>
                  <div className="feed-text">
                    <strong>Miguel Ramos</strong> se unió como maestro en tu
                    zona.
                  </div>
                  <div className="feed-time">Hace 2 días</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
