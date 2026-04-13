'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/form/checkbox';
import { Input } from '@/components/ui/form/input';
import Select from '@/components/ui/form/select';
import { LoginTabs, UserRole } from '@/types/auth';
import { Form, Formik } from 'formik';
import { House, Lock, Mail, Phone, Wrench } from 'lucide-react';
import Link from 'next/link';
import { IRegisterValues, useRegister } from './useRegister';

interface RegisterFormProps {
  selectRegisterRole: (role: UserRole) => void;
  registerRole: UserRole;
  switchTab: (tab: LoginTabs) => void;
}

export function RegisterForm({
  selectRegisterRole,
  registerRole,
  switchTab,
}: RegisterFormProps) {
  const { formikProps } = useRegister({
    registerRole,
    switchTab,
  });

  return (
    <>
      <h2 className="form-title fade-up d1">Crear cuenta</h2>
      <p className="form-sub fade-up d2">
        Es gratis. Tarda menos de 2 minutos.
      </p>

      {/* Role selector */}
      <div className="role-selector fade-up d2" id="registerRoles">
        <Button
          type="button"
          className={`role-btn ${registerRole === UserRole.client ? 'active' : ''}`}
          onClick={() => selectRegisterRole(UserRole.client)}
        >
          <div className="role-check">✓</div>
          <span className="role-icon">
            <House />
          </span>
          <span className="role-name">Soy cliente</span>
          <span className="role-desc">Quiero contratar</span>
        </Button>
        <Button
          type="button"
          className={`role-btn ${registerRole === UserRole.provider ? 'active' : ''}`}
          onClick={() => selectRegisterRole(UserRole.provider)}
        >
          <div className="role-check">✓</div>
          <span className="role-icon">
            <Wrench />
          </span>
          <span className="role-name">Soy maestro</span>
          <span className="role-desc">Quiero ofrecer servicios</span>
        </Button>
      </div>

      <Formik enableReinitialize {...formikProps}>
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="field-row fade-up d3">
              <div className="field">
                <Input<IRegisterValues>
                  type="text"
                  className="input-wrap"
                  name="firstName"
                  label="Nombre"
                  placeholder="Juan"
                  formik={formik}
                />
              </div>
              <div className="field">
                <Input<IRegisterValues>
                  type="text"
                  className="input-wrap"
                  name="lastName"
                  label="Apellido"
                  placeholder="Pérez"
                  formik={formik}
                />
              </div>
            </div>

            <div className="field fade-up d3">
              <Input<IRegisterValues>
                type="email"
                className="input-wrap"
                placeholder="Correo electrónico"
                name="email"
                formik={formik}
                Icon={<Mail width={16} height={16} />}
                label="Correo electrónico"
              />
            </div>

            <div className="field fade-up d4">
              <Input<IRegisterValues>
                type="tel"
                className="input-wrap"
                placeholder="Teléfono"
                name="phone"
                formik={formik}
                Icon={<Phone width={15} height={15} />}
                label="Teléfono"
              />
            </div>

            {/* <!-- ── PROVIDER ONLY FIELDS ── --> */}
            {registerRole === 'provider' && (
              <div className="provider-fields show fade-in">
                <div
                  style={{
                    height: '1px',
                    background: 'var(--border)',
                    marginBottom: '1rem',
                  }}
                ></div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--amber-dark)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Tu oficio
                </div>

                <div className="field">
                  <Select
                    name="category"
                    className="input-wrap select-wrap"
                    formik={formik}
                    label="Categoría principal"
                    options={[
                      { value: '', label: 'Selecciona tu oficio...' },
                      { value: 'plomeria', label: 'Plomería' },
                      { value: 'electricidad', label: 'Electricidad' },
                      { value: 'carpinteria', label: 'Carpintería' },
                      { value: 'pintura', label: 'Pintura' },
                      { value: 'albanileria', label: 'Albañilería' },
                      {
                        value: 'aire_acondicionado',
                        label: 'Aire acondicionado',
                      },
                      { value: 'cerrajeria', label: 'Cerrajería' },
                      { value: 'jardineria', label: 'Jardinería' },
                      { value: 'vidrieria', label: 'Vidriería' },
                      { value: 'remodelaciones', label: 'Remodelaciones' },
                      { value: 'otro', label: 'Otro' },
                    ]}
                  />
                </div>

                <div className="field">
                  <Select
                    name="experience"
                    className="input-wrap select-wrap"
                    formik={formik}
                    label="Años de experiencia"
                    options={[
                      { value: '', label: '¿Cuántos años llevas trabajando?' },
                      { value: 'less_than_1', label: 'Menos de 1 año' },
                      { value: '1_3', label: '1-3 años' },
                      { value: '3_5', label: '3-5 años' },
                      { value: '5_10', label: '5-10 años' },
                      { value: 'more_than_10', label: 'Más de 10 años' },
                    ]}
                  />
                </div>

                <div
                  style={{
                    height: '1px',
                    background: 'var(--border)',
                    marginBottom: '1rem',
                  }}
                ></div>
              </div>
            )}

            <div className="field fade-up d4">
              <Input<IRegisterValues>
                type="password"
                name="password"
                className="input-wrap"
                label="Contraseña"
                placeholder="Mínimo 8 caracteres"
                formik={formik}
                Icon={<Lock width={16} height={16} />}
              />
            </div>
            <Checkbox<IRegisterValues> name="acceptTerms" formik={formik}>
              Acepto los <Link href="/terms">Términos de servicio</Link> y la
              <Link href="/privacy"> Política de privacidad</Link> de Oficio.
            </Checkbox>

            <Button
              type="submit"
              loading={false}
              className="btn-submit fade-up d5"
            >
              <div className="spinner"></div>
              <span className="btn-text">Crear mi cuenta gratis</span>
            </Button>
          </Form>
        )}
      </Formik>

      <div className="divider fade-up d5">o regístrate con</div>

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
        ¿Ya tienes cuenta?
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchTab('login');
          }}
        >
          Iniciar sesión
        </Link>
      </div>
    </>
  );
}
