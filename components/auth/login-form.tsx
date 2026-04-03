'use client';

import { RoleEnum } from '@/enums/roleEnum';
import { Form, Formik } from 'formik';
import { Eye, Lock, Mail } from 'lucide-react';
import * as Yup from 'yup';
interface LoginFormProps {
  selectLoginRole: (role: RoleEnum) => void;
  loginRole: RoleEnum;
  switchTab: (tab: 'login' | 'register') => void;
}

export function LoginForm({
  selectLoginRole,
  loginRole,
  switchTab,
}: LoginFormProps) {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Correo inválido').required('Correo requerido'),
    password: Yup.string().required('Contraseña requerida'),
  });

  const handleLogin = () => {
    // TODO: Implement login logic
  };
  return (
    <>
      <h2 className="form-title fade-up d1">Bienvenido de vuelta</h2>
      <p className="form-sub fade-up d2">Ingresa tus datos para continuar</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <div className="field fade-up d3">
              <label>Correo electrónico</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <Mail width={16} height={16} />
                </span>
                <input
                  type="text"
                  id="loginEmail"
                  placeholder="tu@correo.com"
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              <div className="field-error" id="loginEmailErr">
                Ingresa un correo válido
              </div>
            </div>

            <div className="field fade-up d4">
              <label>Contraseña</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <Lock width={16} height={16} />
                </span>
                <input type="password" id="loginPass" placeholder="••••••••" />
                <button className="eye-btn">
                  <Eye />
                </button>
              </div>
              <div className="field-error" id="loginPassErr">
                Ingresa tu contraseña
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="forgot-row fade-up d4">
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>

      <button className="btn-submit fade-up d5" id="loginBtn">
        <div className="spinner"></div>
        <span className="btn-text">Entrar a mi cuenta</span>
      </button>

      <div className="divider fade-up d5">o continúa con</div>

      <button
        className="btn-social fade-up d6"
        //   onClick="socialLogin('Google')"
      >
        <img src="/resources/svg/google.svg" alt="Google" />
        Continuar con Google
      </button>

      <div className="switch-link fade-up d6">
        ¿No tienes cuenta?
        <a href="#" onClick={() => switchTab('register')}>
          Regístrate gratis
        </a>
      </div>
    </>
  );
}
