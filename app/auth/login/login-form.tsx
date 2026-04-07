'use client';

import { LoginTabs } from '@/app/auth/useAuth';
import type { UserRole } from '@prisma/client';
import { Form, Formik } from 'formik';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useLoginForm } from './useLoginForm';

interface LoginFormProps {
  loginRole: UserRole;
  switchTab: (tab: LoginTabs) => void;
}

export function LoginForm({ loginRole, switchTab }: LoginFormProps) {
  const {
    initialValues,
    validationSchema,
    handleLogin,
    showPassword,
    setShowPassword,
  } = useLoginForm({
    loginRole,
  });
  return (
    <>
      <h2 className="form-title fade-up d1">Bienvenido de vuelta</h2>
      <p className="form-sub fade-up d2">Ingresa tus datos para continuar</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="field fade-up d3">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <Mail width={16} height={16} />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@correo.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? 'error' : ''}
                />
              </div>
              <div
                className={`field-error ${touched.email && errors.email ? 'show' : ''}`}
              >
                {errors.email}
              </div>
            </div>

            <div className="field fade-up d4">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <Lock width={16} height={16} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={touched.password && errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye width={16} height={16} />
                  ) : (
                    <EyeOff width={16} height={16} />
                  )}
                </button>
              </div>
              <div
                className={`field-error ${touched.password && errors.password ? 'show' : ''}`}
              >
                {errors.password}
              </div>
            </div>

            <div className="forgot-row fade-up d4">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <button
              type="submit"
              className={`btn-submit fade-up d5`}
              disabled={false}
            >
              <div className="spinner"></div>
              <span className="btn-text">Entrar a mi cuenta</span>
            </button>
          </Form>
        )}
      </Formik>

      <div className="divider fade-up d5">o continúa con</div>

      <button className="btn-social fade-up d6" type="button">
        <img
          src="/resources/svg/google.svg"
          alt="Google"
          width={18}
          height={18}
        />
        Continuar con Google
      </button>

      <div className="switch-link fade-up d6">
        ¿No tienes cuenta?
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchTab('register');
          }}
        >
          Regístrate gratis
        </a>
      </div>
    </>
  );
}
