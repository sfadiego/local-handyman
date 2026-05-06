import { Button } from '@/components/ui/button';

interface QuickActionListProps {
  title: string;
}

const QuickActionItem = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) => {
  return (
    <Button className="qa-btn" onClick={() => null}>
      <div className="qa-icon">{icon}</div>
      <div className="qa-label">{title}</div>
      <div className="qa-sub">{subtitle}</div>
    </Button>
  );
};

const QuickActionList = ({ title }: QuickActionListProps) => {
  return (
    <div className="card fu d2">
      <div className="card-header">
        <div className="card-title">{title}</div>
      </div>
      <div className="qa-grid">
        <QuickActionItem
          title="Pedir servicio"
          subtitle="Solicita ahora"
          icon="🔍"
        />
        <QuickActionItem title="Mensajes" subtitle="3 sin leer" icon="💬" />
        <QuickActionItem title="Historial" subtitle="8 servicios" icon="🕐" />
        <QuickActionItem title="Favoritos" subtitle="4 maestros" icon="❤️" />
      </div>
    </div>
  );
};

export default QuickActionList;
