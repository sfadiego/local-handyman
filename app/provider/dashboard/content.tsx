import DashboardCard, { cardVariant } from '@/components/card/dashboard-card';
import QuickActionList from '@/components/card/quick-actions/quick-action-cards';
import WarningCard from '@/components/card/warning/warning-card';
import ListButton from '@/components/list/list-button/list-button';
import SingleList from '@/components/list/single-list/single-list';
import { Button } from '@/components/ui/button';
import {
  CheckSquare,
  LucideIcon,
  MessageCircleMore,
  Plus,
  Star,
  Wrench,
} from 'lucide-react';
import { ActiveRequestList } from './activeRequest/active-request-list';
import WelcomeCard from './welcome-card';

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
          <WelcomeCard />
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
                variant={card.variant as cardVariant}
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
            <ListButton />
          </div>
          <div className="right-col">
            {/* Acciones rápidas */}
            <QuickActionList title="Acciones rápidas" />
            {/* Aviso */}

            <WarningCard
              title="¿Eres maestro también?"
              subtitle="Regístrate como proveedor y empieza a recibir clientes en tu zona sin costo inicial."
              button={true}
              buttonText="Registrar mi oficio →"
            />

            {/* Actividad reciente */}
            <SingleList title="Actividad reciente" />
          </div>
        </div>
      </div>
    </>
  );
};
