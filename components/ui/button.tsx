interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  style?: React.CSSProperties;
  id?: string;
  buttonStyle?: 'dark' | 'none';
}

const configButtonStyle = {
  none: {},
  dark: {
    flex: 1,
    padding: '0.75rem',
    background: 'var(--charcoal)',
    color: 'white',
    fontFamily: 'Syne',
    fontWeight: 700,
    fontSize: '0.875rem',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
  },
};

export const Button = ({
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  loading = false,
  style = {},
  id,
  buttonStyle = 'none',
}: ButtonProps) => {
  const selectedStyle = configButtonStyle[buttonStyle];
  return (
    <button
      {...(id ? { id } : {})}
      className={`${className} ${loading ? 'loading' : ''}`}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      style={{ ...selectedStyle, ...style }}
    >
      {children}
    </button>
  );
};
