interface AvatarInfoProps {
  name: string;
  children: React.ReactNode;
}

const AvatarInfo = ({ name, children }: AvatarInfoProps) => {
  return (
    <div>
      <div className="syne" style={{ fontWeight: 700, fontSize: '1rem' }}>
        {name}
      </div>
      {children}
    </div>
  );
};

export default AvatarInfo;
