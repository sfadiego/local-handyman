interface AvatarProps {
  name: string;
  className?: string;
  useDefaultStyle?: boolean;
}

const defaultStyle = {
  width: '50px',
  height: '50px',
  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Syne, sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  color: 'white',
  flexShrink: 0,
};
export const Avatar = ({
  name,
  className = '',
  useDefaultStyle = true,
}: AvatarProps) => {
  return (
    <div
      className={className}
      style={{
        ...(useDefaultStyle ? defaultStyle : {}),
      }}
    >
      {name}
    </div>
  );
};
