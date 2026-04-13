'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form/input';
import { LoginTabs, UserRole } from '@/types/auth';
import { Form, Formik } from 'formik';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { ILoginValues, useLoginForm } from './useLoginForm';

interface LoginFormProps {
  loginRole: UserRole;
  switchTab: (tab: LoginTabs) => void;
}

export function LoginForm({ loginRole, switchTab }: LoginFormProps) {
  const { initialValues, validationSchema, handleLogin } = useLoginForm({
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
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="field fade-up d3">
              <Input<ILoginValues>
                type="email"
                name="email"
                label="Correo electrónico"
                placeholder="tu@correo.com"
                formik={formik}
                className="input-wrap"
                Icon={<Mail width={16} height={16} />}
              />
            </div>

            <div className="field fade-up d4">
              <Input<ILoginValues>
                type="password"
                name="password"
                label="Contraseña"
                className="input-wrap"
                placeholder="••••••••"
                formik={formik}
              />
            </div>

            <div className="forgot-row fade-up d4">
              <Link href="#">¿Olvidaste tu contraseña?</Link>
            </div>

            <Button
              type="submit"
              className={`btn-submit fade-up d5`}
              disabled={false}
            >
              <div className="spinner"></div>
              <span className="btn-text">Entrar a mi cuenta</span>
            </Button>
          </Form>
        )}
      </Formik>

      <div className="divider fade-up d5">o continúa con</div>

      <Button className="btn-social fade-up d6" type="button">
        <img
          src="/resources/svg/google.svg"
          alt="Google"
          width={18}
          height={18}
        />
        Continuar con Google
      </Button>

      <div className="switch-link fade-up d6">
        ¿No tienes cuenta?
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchTab('register');
          }}
        >
          Regístrate gratis
        </Link>
      </div>
    </>
  );
}
