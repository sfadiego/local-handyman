import { useAuthContext } from '@/hooks/useAuthContext';
import { useEffect, useState } from 'react';

export const useNavbar = () => {
  const { user, logout } = useAuthContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.avatar-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  if (!user) return null;

  return {
    isMenuOpen,
    toggleMenu,
    user,
    logout,
  };
};
