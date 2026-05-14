'use client';
import { useAuthContext } from '@/hooks/useAuthContext';
import { getUserName } from '@/lib/utils';
import { Avatar } from './avatar';
import AvatarInfo from './avatar-info';
import AvatarLocation from './avatar-location';

const UserAvatar = () => {
  const { user } = useAuthContext();
  if (!user) {
    return null;
  }
  const location = `${user?.role} · ${user?.city}`;
  const fullName = getUserName({ user });
  return (
    <div className="user-pill">
      <Avatar className="user-avatar" style="empty" />
      <div>
        <AvatarInfo name={fullName} className="user-name" />
        <AvatarLocation text={location} />
      </div>
    </div>
  );
};

export default UserAvatar;
