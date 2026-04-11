import { LucideIcon } from 'lucide-react';

interface IListItem {
  Icon: LucideIcon;
  title: string;
  sub: string;
  meta: string;
  price: string;
  status: string;
}
const RequestListItem = ({
  Icon,
  title,
  sub,
  meta,
  price,
  status,
}: IListItem) => {
  return (
    <div className="request-item" onClick={() => null}>
      <div className="req-icon" style={{ background: 'rgba(59,130,246,.1)' }}>
        <Icon />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="req-title">{title}</div>
        <div className="req-sub">
          {sub} · {meta}
        </div>
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
