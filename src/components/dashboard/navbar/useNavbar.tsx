import { useAuthContext } from '@/hooks/useAuthContext';
import { useEffect, useState } from 'react';

export const useNavbar = () => {
  const { user, logout } = useAuthContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.avatar-menu-container')) {
        setIsMenuOpen(false);
      }
      if (!target.closest('.messages-menu-container')) {
        setIsMessagesOpen(false);
      }
      if (!target.closest('.notifications-menu-container')) {
        setIsNotificationsOpen(false);
      }
    };

    if (isMenuOpen || isMessagesOpen || isNotificationsOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, isMessagesOpen, isNotificationsOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsMessagesOpen(false);
      setIsNotificationsOpen(false);
    }
  };

  const toggleMessages = () => {
    setIsMessagesOpen(!isMessagesOpen);
    if (!isMessagesOpen) {
      setIsMenuOpen(false);
      setIsNotificationsOpen(false);
    }
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (!isNotificationsOpen) {
      setIsMenuOpen(false);
      setIsMessagesOpen(false);
    }
  };

  if (!user) return null;

  return {
    isMenuOpen,
    toggleMenu,
    isMessagesOpen,
    toggleMessages,
    isNotificationsOpen,
    toggleNotifications,
    user,
    logout,
  };
};
