'use client';
import { useAuthContext } from '@/hooks/useAuthContext';
import { Avatar } from './avatar';
import AvatarInfo from './avatar-info';
import AvatarLocation from './avatar-location';

const UserAvatar = () => {
  const { user } = useAuthContext();
  if (!user) {
    return null;
  }
  const location = `${user?.role} · ${user?.city}`;
  return (
    <div className="user-pill">
      <Avatar className="user-avatar" style="empty" />
      <div>
        <AvatarInfo
          name={`${user?.firstName} ${user?.lastName}`}
          className="user-name"
        />
        <AvatarLocation text={location} />
      </div>
    </div>
  );
};

export default UserAvatar;
