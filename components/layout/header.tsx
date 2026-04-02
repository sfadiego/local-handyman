'use client';

import { AuthModal } from '@/components/auth/auth-modal';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authForm, setAuthForm] = useState<'login' | 'register'>('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthClick = (form: 'login' | 'register') => {
    setAuthForm(form);
    setShowAuthModal(true);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold text-gray-900 hover:text-black transition-colors"
              >
                Local Handyman
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/search"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cómo funciona
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Para profesionales
              </a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {isAuthenticated && user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="hidden md:block">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {user.type}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    <LogOut className="h-4 w-4" />
                    <span className="hidden md:inline ml-2">Salir</span>
                  </Button>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    onClick={() => handleAuthClick('login')}
                  >
                    Iniciar sesión
                  </Button>
                  <Button
                    onClick={() => handleAuthClick('register')}
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    Registrarse
                  </Button>
                </div>
              )}

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
              <nav className="flex flex-col space-y-4">
                <a href="/search" className="text-gray-600 hover:text-gray-900">
                  Servicios
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Cómo funciona
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Para profesionales
                </a>
              </nav>

              {!isAuthenticated && (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button
                    variant="ghost"
                    onClick={() => handleAuthClick('login')}
                  >
                    Iniciar sesión
                  </Button>
                  <Button
                    onClick={() => handleAuthClick('register')}
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    Registrarse
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <AuthModal
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        defaultForm={authForm}
      />
    </>
  );
}
