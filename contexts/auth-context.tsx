'use client';

import { ILoginValues } from '@/app/auth/login/useLoginForm';
import { IRegisterValues } from '@/app/auth/register/useRegister';
import { userSeed } from '@/prisma/seeds/user-seed';
import { User } from '@prisma/client';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: ({ email, password }: ILoginValues) => Promise<boolean>;
  logout: () => void;
  register: (data: IRegisterValues) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const generateFakeToken = (userId: string) =>
  `mock_token_${userId}_${Date.now()}`;
export function AuthProvider({ children }: { children: ReactNode }) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('user');

    if (savedToken && savedUser) {
      setAuthToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async ({ email, password }: ILoginValues): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = userSeed.find((u) => u.email === email);
    const isPasswordValid = password === user?.passwordHash;
    if (user && isPasswordValid) {
      const mockToken = generateFakeToken(user.id);
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('user', JSON.stringify(user));
      setAuthToken(mockToken);
      setUser(user);
      return true;
    }
    return false;
  };

  const register = async (data: IRegisterValues): Promise<boolean> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newUser: User = {
        id: Date.now().toString(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        passwordHash: data.password,
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.firstName}`,
        role: data.role,
        lat: 19.4284, // Default CDMX coordinates
        lng: -99.1276,
        city: 'Ciudad de México',
        state: 'Ciudad de México',
        address: 'Dirección por defecto',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockToken = generateFakeToken(newUser.id);
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('user', JSON.stringify(newUser));

      setAuthToken(mockToken);
      setUser(newUser);
      return true;
    } catch {
      return false;
    }
  };

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setAuthToken(null);
    setUser(null);
    window.location.replace('/auth');
  }, []);

  const isAuthenticated = !!authToken;
  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      register,
    }),
    [user, authToken, isLoading, logout]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
