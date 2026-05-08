interface ICardProps {
  title: string;
  subtitle: string;
  text: string;
}

const SimpleCard = ({ title, subtitle, text }: ICardProps) => {
  return (
    <div
      style={{
        background: '#f5f4f2',
        borderRadius: '14px',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--warm-gray)',
          marginBottom: '0.6rem',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          marginBottom: '0.25rem',
        }}
      >
        {subtitle}
      </div>
      <div
        style={{
          fontSize: '0.83rem',
          color: 'var(--warm-gray)',
          lineHeight: '1.6',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default SimpleCard;
