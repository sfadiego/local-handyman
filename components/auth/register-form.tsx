'use client';

import { LoginTabs } from '@/app/auth/useAuth';
import { UserRole } from '@prisma/client';
import { Form, Formik } from 'formik';
import {
  Eye,
  EyeOff,
  House,
  Lock,
  Mail,
  Phone,
  User,
  Wrench,
} from 'lucide-react';
import { useRegister } from './register/useRegister';

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
  const { showPassword, setShowPassword, formikProps } = useRegister({
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
        <button
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
        </button>
        <button
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
        </button>
      </div>

      <Formik enableReinitialize {...formikProps}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="field-row fade-up d3">
              <div className="field">
                <label htmlFor="firstName">Nombre</label>
                <div className="input-wrap">
                  <span className="input-icon">
                    <User width={15} height={15} />
                  </span>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Juan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={
                      touched.firstName && errors.firstName ? 'error' : ''
                    }
                  />
                </div>
                <div
                  className={`field-error ${touched.firstName && errors.firstName ? 'show' : ''}`}
                >
                  {errors.firstName}
                </div>
              </div>
              <div className="field">
                <label htmlFor="lastName">Apellido</label>
                <div className="input-wrap">
                  <span className="input-icon">
                    <User width={15} height={15} />
                  </span>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Morales"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={
                      touched.lastName && errors.lastName ? 'error' : ''
                    }
                  />
                </div>
                <div
                  className={`field-error ${touched.lastName && errors.lastName ? 'show' : ''}`}
                >
                  {errors.lastName}
                </div>
              </div>
            </div>

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
              <label htmlFor="phone">Teléfono</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <Phone width={15} height={15} />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+52 312 000 0000"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className={touched.phone && errors.phone ? 'error' : ''}
                />
              </div>
              <div
                className={`field-error ${touched.phone && errors.phone ? 'show' : ''}`}
              >
                {errors.phone}
              </div>
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
                  <label htmlFor="category">Categoría principal</label>
                  <div className="input-wrap select-wrap">
                    <select
                      id="category"
                      name="category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                      className={
                        touched.category && errors.category ? 'error' : ''
                      }
                    >
                      <option value="">Selecciona tu oficio...</option>
                      <option value="plomeria">Plomería</option>
                      <option value="electricidad">Electricidad</option>
                      <option value="carpinteria">Carpintería</option>
                      <option value="pintura">Pintura</option>
                      <option value="albanileria">Albañilería</option>
                      <option value="aire_acondicionado">
                        Aire acondicionado
                      </option>
                      <option value="cerrajeria">Cerrajería</option>
                      <option value="jardineria">Jardinería</option>
                      <option value="vidrieria">Vidriería</option>
                      <option value="remodelaciones">Remodelaciones</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div
                    className={`field-error ${touched.category && errors.category ? 'show' : ''}`}
                  >
                    {errors.category}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="experience">Años de experiencia</label>
                  <div className="input-wrap select-wrap">
                    <select
                      id="experience"
                      name="experience"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.experience}
                      className={
                        touched.experience && errors.experience ? 'error' : ''
                      }
                    >
                      <option value="">¿Cuántos años llevas trabajando?</option>
                      <option value="less_than_1">Menos de 1 año</option>
                      <option value="1_3">1-3 años</option>
                      <option value="3_5">3-5 años</option>
                      <option value="5_10">5-10 años</option>
                      <option value="more_than_10">Más de 10 años</option>
                    </select>
                  </div>
                  <div
                    className={`field-error ${touched.experience && errors.experience ? 'show' : ''}`}
                  >
                    {errors.experience}
                  </div>
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
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <Lock width={16} height={16} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Mínimo 8 caracteres"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={touched.password && errors.password ? 'error' : ''}
                />
                <button
                  className="eye-btn"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff width={16} height={16} />
                  ) : (
                    <Eye width={16} height={16} />
                  )}
                </button>
              </div>
              <div
                className={`field-error ${touched.password && errors.password ? 'show' : ''}`}
              >
                {errors.password}
              </div>
            </div>

            <div className="check-row fade-up d5">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.acceptTerms}
              />
              <label className="check-label" htmlFor="acceptTerms">
                Acepto los <a href="#">Términos de servicio</a> y la
                <a href="#">Política de privacidad</a> de Oficio.
              </label>
            </div>
            <div
              className={`field-error ${touched.acceptTerms && errors.acceptTerms ? 'show' : ''}`}
              style={{ marginTop: '-0.75rem', marginBottom: '0.75rem' }}
            >
              {errors.acceptTerms}
            </div>

            <button
              type="submit"
              className="btn-submit fade-up d5" //descomentar para agregar spiner ${isSubmitting ? 'loading' : ''}
              disabled={false}
            >
              <div className="spinner"></div>
              <span className="btn-text">Crear mi cuenta gratis</span>
            </button>
          </Form>
        )}
      </Formik>

      <div className="divider fade-up d5">o regístrate con</div>

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
        ¿Ya tienes cuenta?
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchTab('login');
          }}
        >
          Iniciar sesión
        </a>
      </div>
    </>
  );
}
