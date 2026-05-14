interface AvatarInfoProps {
  name: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const AvatarInfo = ({
  name,
  className = '',
  children,
  style = {},
}: AvatarInfoProps) => {
  return (
    <div className={className}>
      <div className="syne" style={{ ...style }}>
        {name}
      </div>
      {children ?? children}
    </div>
  );
};

export default AvatarInfo;
