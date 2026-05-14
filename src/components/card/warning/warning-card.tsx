import { Button } from '@/components/ui/button';

interface WarningCardProps {
  title: string;
  subtitle: string;
  button?: boolean;
  buttonText?: string;
}

const WarningCard = ({
  title,
  subtitle,
  button,
  buttonText,
}: WarningCardProps) => {
  return (
    <div className="promo-banner fu d3">
      <div className="promo-title">{title}</div>
      <div className="promo-sub">{subtitle}</div>
      {button && <Button className="btn-promo">{buttonText}</Button>}
    </div>
  );
};

export default WarningCard;
