'use client';

import { loginAction, logoutAction } from '@/actions/auth';
import { ILoginValues } from '@/app/auth/login/useLoginForm';
import { IRegisterValues } from '@/app/auth/register/useRegister';
import { userSeed } from '@/prisma/seeds/user-seed';
import { AuthRoutes } from '@/routes/routes';
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
  login: ({ email, password }: ILoginValues) => Promise<User | boolean>;
  logout: () => void;
  register: (data: IRegisterValues) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async ({
    email,
    password,
  }: ILoginValues): Promise<User | boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = userSeed.find((u) => u.email === email);
    const isPasswordValid = password === user?.passwordHash;
    if (user && isPasswordValid) {
      await loginAction(user);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      return user;
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

      await loginAction(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      return true;
    } catch {
      return false;
    }
  };

  const logout = useCallback(async () => {
    await logoutAction();
    localStorage.removeItem('user');
    setUser(null);
    window.location.replace(AuthRoutes.AUTH);
  }, []);

  const isAuthenticated = !!user;
  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      register,
    }),
    [user, isLoading, logout]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
