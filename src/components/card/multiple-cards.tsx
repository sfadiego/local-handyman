type MultipleCardsProps = {
  values: {
    title: string;
    value: string;
  }[];
};

const MultipleCards = ({ values }: MultipleCardsProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${values.length}, 1fr)`,
        gap: '0.6rem',
        marginBottom: '1.25rem',
      }}
    >
      {values.map((value, index) => (
        <div
          key={index}
          style={{
            background: '#f5f4f2',
            borderRadius: '12px',
            padding: '0.75rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '0.7rem',
              color: 'var(--muted)',
              marginBottom: '0.2rem',
            }}
          >
            {value.title}
          </div>
          <div className="syne" style={{ fontWeight: '800', fontSize: '1rem' }}>
            {value.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleCards;
