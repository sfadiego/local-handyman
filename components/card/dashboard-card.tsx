import { LucideIcon } from 'lucide-react';

interface CardProps {
  Icon: LucideIcon;
  number: string;
  label: string;
  change: string;
  className?: string;
  variant?: 'default' | 'success' | 'neutral' | 'dark';
}

const variantConfig = (variant: 'default' | 'success' | 'neutral' | 'dark') => {
  switch (variant) {
    case 'default':
      return {
        iconBg: 'rgba(245,158,11,.1)',
        statChangeBg: {},
        statChangeClass: 'up',
      };
    case 'success':
      return {
        iconBg: 'rgba(34,197,94,.1)',
        statChangeBg: {},
        statChangeClass: 'up',
      };
    case 'neutral':
      return {
        iconBg: 'rgba(59,130,246,.1)',
        statChangeBg: {},
        statChangeClass: 'neutral',
      };
    case 'dark':
      return {
        iconBg: 'rgba(255,255,255,.08)',
        statChangeBg: { background: 'rgba(245,158,11,.2)', color: '#FCD34D' },
        statChangeClass: 'up',
      };
    default:
      return {
        iconBg: 'rgba(245,158,11,.1)',
        statChangeBg: {},
        statChangeClass: 'up',
      };
  }
};
const DashboardCard = ({
  Icon,
  number,
  label,
  change,
  className,
  variant = 'default',
}: CardProps) => {
  return (
    <div className={`stat-card ${className || ''}`}>
      <div
        className="stat-icon-wrap"
        style={{
          background: variantConfig(variant).iconBg || 'rgba(245,158,11,.1)',
        }}
      >
        <Icon />
      </div>
      <div className="stat-num">{number}</div>
      <div className="stat-label">{label}</div>
      <div
        className={`stat-change ${variantConfig(variant).statChangeClass || ''}`}
        style={variantConfig(variant).statChangeBg || {}}
      >
        {change}
      </div>
    </div>
  );
};

export default DashboardCard;
