'use client';
import { useState } from 'react';

// ── Types ──
type Tab = 'login' | 'register';
type Role = 'client' | 'provider';

interface SuccessScreen {
  title: string;
  msg: string;
  btnText: string;
}

// ── Helpers ──
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function useAuth() {
  // ── State ──
  const [currentTab, setCurrentTab] = useState<Tab>('login');
  const [loginRole, setLoginRole] = useState<Role>('client');
  const [registerRole, setRegisterRole] = useState<Role>('client');
  const [successScreen, setSuccessScreen] = useState<SuccessScreen | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState<{
    width: string;
    color: string;
    label: string;
  } | null>(null);

  // ── Tab switch ──
  const switchTab = (tab: Tab) => {
    setCurrentTab(tab);
    setSuccessScreen(null);
    setFieldErrors({});
  };

  // ── Role select ──
  const selectLoginRole = (role: Role) => setLoginRole(role);

  const selectRegisterRole = (role: Role) => setRegisterRole(role);

  // ── Field errors ──
  const showErr = (field: string, msg = 'Campo requerido') => {
    setFieldErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const clearErr = (field: string) => {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const clearAllErrors = (fields: string[]) => {
    setFieldErrors((prev) => {
      const next = { ...prev };
      fields.forEach((f) => delete next[f]);
      return next;
    });
  };

  // ── Password strength ──
  const checkStrength = (val: string) => {
    if (!val) {
      setPasswordStrength(null);
      return;
    }

    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const levels = [
      { width: '25%', color: '#EF4444', label: 'Muy débil' },
      { width: '50%', color: '#F97316', label: 'Débil' },
      { width: '75%', color: '#EAB308', label: 'Buena' },
      { width: '100%', color: '#22C55E', label: 'Fuerte' },
    ];

    setPasswordStrength(levels[score - 1] ?? levels[0]);
  };

  // ── Login ──
  const handleLogin = async (email: string, password: string) => {
    const fields = ['loginEmail', 'loginPass'];
    clearAllErrors(fields);
    let ok = true;

    if (!validEmail(email)) {
      showErr('loginEmail', 'Correo inválido');
      ok = false;
    }
    if (!password) {
      showErr('loginPass', 'La contraseña es requerida');
      ok = false;
    }
    if (!ok) return;

    setIsLoading(true);
    await sleep(1500);
    setIsLoading(false);

    showSuccess(
      loginRole === 'provider' ? '¡Bienvenido, Maestro!' : '¡Hola de nuevo!',
      loginRole === 'provider'
        ? 'Tu panel de trabajo está listo. Revisa las nuevas solicitudes.'
        : 'Encuentra el maestro ideal para tu proyecto.',
      loginRole === 'provider' ? 'Ir a mi panel' : 'Explorar servicios'
    );
  };

  // ── Register ──
  const handleRegister = async (fields: {
    nombre: string;
    apellido: string;
    email: string;
    tel: string;
    password: string;
    terms: boolean;
    categoria?: string;
  }) => {
    const { nombre, apellido, email, tel, password, terms, categoria } = fields;
    const isProvider = registerRole === 'provider';

    clearAllErrors([
      'regNombre',
      'regApellido',
      'regEmail',
      'regTel',
      'regPass',
      'regTerms',
      'regCategoria',
    ]);

    let ok = true;

    if (!nombre) {
      showErr('regNombre');
      ok = false;
    }
    if (!apellido) {
      showErr('regApellido');
      ok = false;
    }
    if (!validEmail(email)) {
      showErr('regEmail', 'Correo inválido');
      ok = false;
    }
    if (!tel || tel.length < 8) {
      showErr('regTel', 'Teléfono inválido');
      ok = false;
    }
    if (password.length < 8) {
      showErr('regPass', 'Mínimo 8 caracteres');
      ok = false;
    }
    if (isProvider && !categoria) {
      showErr('regCategoria');
      ok = false;
    }
    if (!terms) {
      showErr('regTerms', 'Debes aceptar los términos');
      ok = false;
    }
    if (!ok) return;

    setIsLoading(true);
    await sleep(1800);
    setIsLoading(false);

    showSuccess(
      isProvider ? '¡Bienvenido, Maestro! 🔧' : '¡Cuenta creada! 🎉',
      isProvider
        ? 'Tu perfil ya está visible. Completa tu información para recibir más solicitudes.'
        : 'Ya puedes buscar servicios cerca de ti.',
      isProvider ? 'Completar mi perfil' : 'Buscar un maestro'
    );
  };

  // ── Success screen ──
  const showSuccess = (title: string, msg: string, btnText: string) => {
    setSuccessScreen({ title, msg, btnText: `${btnText} →` });
  };

  const resetSuccess = () => {
    setSuccessScreen(null);
    switchTab('login');
  };

  // ── Social login ──
  const socialLogin = (provider: string) => {
    alert(`Integración con ${provider} próximamente.`);
  };

  return {
    // State
    currentTab,
    loginRole,
    registerRole,
    successScreen,
    isLoading,
    fieldErrors,
    passwordStrength,
    // Actions
    switchTab,
    selectLoginRole,
    selectRegisterRole,
    handleLogin,
    handleRegister,
    resetSuccess,
    socialLogin,
    checkStrength,
    clearErr,
  };
}
