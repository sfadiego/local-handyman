import { Button } from '@/components/ui/button';

interface IQuickActionItem {
  title: string;
  subtitle: string;
  icon: string;
}
export const QuickActionItem = ({
  title,
  subtitle,
  icon,
}: IQuickActionItem) => {
  return (
    <Button className="qa-btn" onClick={() => null}>
      <div className="qa-icon">{icon}</div>
      <div className="qa-label">{title}</div>
      <div className="qa-sub">{subtitle}</div>
    </Button>
  );
};
