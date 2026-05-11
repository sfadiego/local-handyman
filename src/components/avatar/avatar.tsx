'use client';
import { useAuthContext } from '@/hooks/useAuthContext';

export type AvatarStyles = 'default' | 'navbar' | 'empty';
interface AvatarProps {
  className?: string;
  style?: AvatarStyles;
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
const navbarStyle = { width: '32px', height: '32px', fontSize: '.75rem' };
const avatarStylesMap: Record<AvatarStyles, React.CSSProperties> = {
  default: defaultStyle,
  navbar: navbarStyle,
  empty: {},
};

export const Avatar = ({ className = '', style = 'default' }: AvatarProps) => {
  const { user } = useAuthContext();
  if (!user) {
    return null;
  }
  return (
    <div
      className={className}
      style={{
        ...avatarStylesMap[style],
      }}
    >
      {user?.firstName?.charAt(0) + user?.lastName?.charAt(0)}
    </div>
  );
};
