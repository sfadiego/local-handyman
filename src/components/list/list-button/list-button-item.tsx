import { Button } from '../../ui/button';

export type listButtonItem = 'yellow' | 'blue' | 'green' | 'purple';
interface ListButtonItemProps {
  name: string;
  trade: string;
  experience: string;
  distance: string;
  rating: number;
  styleItem?: listButtonItem;
}

const itemStyle: Record<listButtonItem, string> = {
  yellow: 'linear-gradient(135deg, #f59e0b, #d97706)',
  blue: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  green: 'linear-gradient(135deg, #10b981, #059669)',
  purple: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
};
const ListButtonItem = (props: ListButtonItemProps) => {
  const { styleItem = 'blue' } = props;
  const { name, trade, experience, distance, rating } = props;
  const starsArray = Array.from({ length: rating }).map((_, i) => {
    return <span key={`${i}`}>★</span>;
  });
  return (
    <>
      <div className="maestro-card">
        <div
          className="m-avatar"
          style={{ background: itemStyle[styleItem] || itemStyle['blue'] }}
        >
          {name.charAt(0)}
          <div className="m-online"></div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="m-name">{name}</div>
          <div className="m-trade">
            {trade} · {experience} exp.
          </div>
          <div
            style={{
              display: 'flex',
              gap: '.5rem',
              marginTop: '.2rem',
            }}
          >
            <div className="m-stars">{starsArray}</div>
            <div className="m-dist">{distance}</div>
          </div>
        </div>
        <Button onClick={() => null} className="btn-hire">
          Contratar
        </Button>
      </div>
    </>
  );
};

export default ListButtonItem;
