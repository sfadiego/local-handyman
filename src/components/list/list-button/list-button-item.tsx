import { Button } from '../../ui/button';

interface ListButtonItemProps {
  name: string;
  trade: string;
  experience: string;
  distance: string;
  rating: number;
}

const ListButtonItem = (props: ListButtonItemProps) => {
  const { name, trade, experience, distance, rating } = props;
  const starsArray = Array.from({ length: rating }).map((_, i) => {
    return <span key={`${i}`}>★</span>;
  });
  return (
    <>
      <div className="maestro-card">
        <div
          className="m-avatar"
          style={{
            background: 'linear-gradient(135deg,#F59E0B,#D97706)',
          }}
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
