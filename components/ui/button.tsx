interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}

export const Button = ({
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${loading ? 'loading' : ''}`}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
