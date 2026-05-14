import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/auth-context';

/**
 * Custom hook that provides the authentication context.
 *
 * @returns {AuthContextType} The authentication context.
 * @throws {Error} If the hook is used outside an AuthProvider.
 */
export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
}
