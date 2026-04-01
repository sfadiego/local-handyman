'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  type: 'customer' | 'provider';
  location: {
    address: string;
    lat: number;
    lng: number;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, type: 'customer' | 'provider') => Promise<boolean>;
  logout: () => void;
  register: (data: RegisterData) => Promise<boolean>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  type: 'customer' | 'provider';
  address: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'María González',
    email: 'maria@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    type: 'customer',
    location: {
      address: 'Colonia Roma Norte, CDMX',
      lat: 19.4164,
      lng: -99.1578,
    },
  },
  {
    id: '2',
    name: 'Carlos Jiménez',
    email: 'carlos@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    type: 'provider',
    location: {
      address: 'Colonia Doctores, CDMX',
      lat: 19.4236,
      lng: -99.1438,
    },
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string, type: 'customer' | 'provider'): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const foundUser = mockUsers.find((u) => u.email === email && u.type === type);

      if (foundUser && password === '123456') {
        setUser(foundUser);
        setIsAuthenticated(true);
        localStorage.setItem('authUser', JSON.stringify(foundUser));
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`,
        type: data.type,
        location: {
          address: data.address,
          lat: 19.4284, // Default CDMX coordinates
          lng: -99.1276,
        },
      };

      mockUsers.push(newUser);
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('authUser', JSON.stringify(newUser));
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authUser');
  };

  // Check for stored user on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('authUser');
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
