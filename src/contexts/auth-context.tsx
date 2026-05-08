'use client';

import { getUserFromCookie, loginAction, logoutAction } from '@/actions/auth';
import { ILoginValues } from '@/app/auth/login/useLoginForm';
import { IRegisterValues } from '@/app/auth/register/useRegister';
import { comparePassword, encryptPassword } from '@/lib/encript';
import { TokenPayload } from '@/lib/jwt';
import { AuthRoutes } from '@/routes/paths';
import { createUser, searchUser } from '@/services/user/user.service';
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
  user: TokenPayload | null;
  isAuthenticated: boolean;
  login: ({ email, password }: ILoginValues) => Promise<User | boolean>;
  logout: () => void;
  register: (data: IRegisterValues) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<TokenPayload | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserFromCookie()
      .then((user) => setUser(user))
      .finally(() => setIsLoading(false));
  }, []);

  const login = async ({
    email,
    password,
  }: ILoginValues): Promise<User | boolean> => {
    const user = await searchUser({ email });
    const isPasswordValid = comparePassword(password, user?.passwordHash);
    if (user && isPasswordValid) {
      await loginAction(user);
      setUser(user);
      return user;
    }
    return false;
  };

  const register = async (data: IRegisterValues): Promise<boolean> => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        passwordHash: await encryptPassword(data.password),
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.firstName}`,
        role: data.role,
        lat: 19.2463, // Default Colima coordinates
        lng: -103.7276,
        city: 'Colima',
        state: 'Colima',
        address: 'Dirección por defecto',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await createUser(newUser);
      await loginAction(newUser);
      setUser(newUser);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = useCallback(async () => {
    await logoutAction();
    // implement logout borrando cookie de session
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
