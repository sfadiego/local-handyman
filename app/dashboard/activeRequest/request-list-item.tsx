import { LucideIcon } from 'lucide-react';

interface IListItem {
  Icon: LucideIcon;
  title: string;
  sub: string;
  meta: string;
  price: string;
  status: string;
  onClick?: () => void;
}
const RequestListItem = ({
  Icon,
  title,
  sub,
  meta,
  price,
  status,
  onClick,
}: IListItem) => {
  return (
    <div className="request-item" onClick={onClick}>
      <div className="req-icon" style={{ background: 'rgba(59,130,246,.1)' }}>
        <Icon />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="req-title">{title}</div>
        <div className="req-sub">{sub}</div>
        <div className="req-meta">{meta}</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '.4rem',
        }}
      >
        <div className="status-pill active">
          <div className="status-dot"></div>
          {status}
        </div>
        <div className="req-price">{price}</div>
      </div>
    </div>
  );
};

export default RequestListItem;
