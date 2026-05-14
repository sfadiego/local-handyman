interface AvatarLocationProps {
  text: string;
  className?: string;
}

const AvatarLocation = ({
  text,
  className = 'user-role',
}: AvatarLocationProps) => {
  return <div className={`${className}`}>{text}</div>;
};

export default AvatarLocation;
