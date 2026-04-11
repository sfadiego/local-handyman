interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  style?: React.CSSProperties;
  id?: string;
}

export const Button = ({
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  loading = false,
  style = {},
  id,
}: ButtonProps) => {
  return (
    <button
      {...(id ? { id } : {})}
      className={`${className} ${loading ? 'loading' : ''}`}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
