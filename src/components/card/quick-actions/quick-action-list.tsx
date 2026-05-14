import { QuickActionItem } from './quick-action-item';
interface QuickActionListProps {
  title: string;
}
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
