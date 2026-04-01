'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface LoginFormProps {
  onToggleForm: () => void;
  onClose: () => void;
}

export function LoginForm({ onToggleForm, onClose }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'customer' | 'provider'>('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const success = await login(email, password, userType);

    if (success) {
      onClose();
    } else {
      setError('Credenciales incorrectas. Usa: maria@email.com / carlos@email.com con password: 123456');
    }

    setIsLoading(false);
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
        <CardDescription>Accede a tu cuenta de Local Handyman</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant={userType === 'customer' ? 'default' : 'outline'}
              onClick={() => setUserType('customer')}
              className="w-full"
            >
              Cliente
            </Button>
            <Button
              type="button"
              variant={userType === 'provider' ? 'default' : 'outline'}
              onClick={() => setUserType('provider')}
              className="w-full"
            >
              Profesional
            </Button>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu contraseña"
                required
              />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
              </button>
            </div>
          </div>

          {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Iniciando sesión...
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </Button>

          <div className="text-center">
            <button type="button" onClick={onToggleForm} className="text-sm text-blue-600 hover:text-blue-500">
              ¿No tienes cuenta? Regístrate
            </button>
          </div>

          {/* Demo Credentials */}
          <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
            <p className="mb-1 font-medium">Credenciales de prueba:</p>
            <p>Cliente: maria@email.com / 123456</p>
            <p>Profesional: carlos@email.com / 123456</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
