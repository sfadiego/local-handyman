'use client';

import { Tab } from '@/app/auth/useAuth';
import { Role } from '@/models/role';
import { Eye, Lock, Mail, Phone, User } from 'lucide-react';

interface RegisterFormProps {
  selectRegisterRole: (role: Role) => void;
  registerRole: Role;
  switchTab: (tab: Tab) => void;
}

export function RegisterForm({
  selectRegisterRole,
  registerRole,
  switchTab,
}: RegisterFormProps) {
  return (
    <>
      <h2 className="form-title">Crear cuenta</h2>
      <p className="form-sub">Es gratis. Tarda menos de 2 minutos.</p>

      {/* Role selector */}
      <div className="role-selector" id="registerRoles">
        <button
          className={`role-btn ${registerRole === 'client' ? 'active' : ''}`}
          onClick={() => selectRegisterRole('client')}
          data-role="client"
        >
          <div className="role-check">✓</div>
          <span className="role-icon">🏠</span>
          <span className="role-name">Soy cliente</span>
          <span className="role-desc">Quiero contratar</span>
        </button>
        <button
          className={`role-btn ${registerRole === 'provider' ? 'active' : ''}`}
          onClick={() => selectRegisterRole('provider')}
          data-role="provider"
        >
          <div className="role-check">✓</div>
          <span className="role-icon">🔧</span>
          <span className="role-name">Soy maestro</span>
          <span className="role-desc">Quiero ofrecer servicios</span>
        </button>
      </div>

      <div className="field-row">
        <div className="field">
          <label>Nombre</label>
          <div className="input-wrap">
            <span className="input-icon">
              <User width={15} height={15} />
            </span>
            <input type="text" id="regNombre" placeholder="Juan" />
          </div>
          <div className="field-error" id="regNombreErr">
            Requerido
          </div>
        </div>
        <div className="field">
          <label>Apellido</label>
          <div className="input-wrap">
            <span className="input-icon">
              <User width={15} height={15} />
            </span>
            <input type="text" id="regApellido" placeholder="Morales" />
          </div>
          <div className="field-error" id="regApellidoErr">
            Requerido
          </div>
        </div>
      </div>

      <div className="field">
        <label>Correo electrónico</label>
        <div className="input-wrap">
          <span className="input-icon">
            <Mail width={16} height={16} />
          </span>
          <input type="email" id="regEmail" placeholder="tu@correo.com" />
        </div>
        <div className="field-error" id="regEmailErr">
          Correo inválido
        </div>
      </div>

      <div className="field">
        <label>Teléfono</label>
        <div className="input-wrap">
          <span className="input-icon">
            <Phone width={15} height={15} />
          </span>
          <input type="tel" id="regTel" placeholder="+52 312 000 0000" />
        </div>
        <div className="field-error" id="regTelErr">
          Teléfono inválido
        </div>
      </div>

      {/* <!-- ── PROVIDER ONLY FIELDS ── --> */}
      <div className="provider-fields" id="providerFields">
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
          <label>Categoría principal</label>
          <div className="input-wrap select-wrap">
            <select defaultValue="" id="regCategoria">
              <option value="">Selecciona tu oficio...</option>
              <option value="plomeria">Plomería</option>
              <option value="electricidad">Electricidad</option>
              <option value="carpinteria">Carpintería</option>
              <option value="pintura">Pintura</option>
              <option value="albanileria">Albañilería</option>
              <option value="aire_acondicionado">Aire acondicionado</option>
              <option value="cerrajeria">Cerrajería</option>
              <option value="jardineria">Jardinería</option>
              <option value="vidrieria">Vidriería</option>
              <option value="remodelaciones">Remodelaciones</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="field-error" id="regCategoriaErr">
            Selecciona una categoría
          </div>
        </div>

        <div className="field">
          <label>Años de experiencia</label>
          <div className="input-wrap select-wrap">
            <select id="regExperiencia">
              <option value="" disabled selected>
                ¿Cuántos años llevas trabajando?
              </option>
              <option>Menos de 1 año</option>
              <option>1-3 años</option>
              <option>3-5 años</option>
              <option>5-10 años</option>
              <option>Más de 10 años</option>
            </select>
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

      <div className="field">
        <label>Contraseña</label>
        <div className="input-wrap">
          <span className="input-icon">
            <Lock width={16} height={16} />
          </span>
          <input
            type="password"
            id="regPass"
            placeholder="Mínimo 8 caracteres"
          />
          <button
            className="eye-btn"
            //   onClick="togglePass('regPass', this)"
            type="button"
          >
            <Eye width={16} height={16} />
          </button>
        </div>
        <div className="strength-bar" id="strengthBar">
          <div className="strength-fill" id="strengthFill"></div>
        </div>
        <div className="strength-label" id="strengthLabel"></div>
        <div className="field-error" id="regPassErr">
          Mínimo 8 caracteres
        </div>
      </div>

      <div className="check-row">
        <input type="checkbox" id="regTerms" />
        <label className="check-label" htmlFor="regTerms">
          Acepto los <a href="#">Términos de servicio</a> y la
          <a href="#">Política de privacidad</a> de Oficio.
        </label>
      </div>
      <div
        className="field-error"
        id="regTermsErr"
        style={{ marginTop: '-0.75rem', marginBottom: '0.75rem' }}
      >
        Debes aceptar los términos
      </div>

      <button
        className="btn-submit"
        id="regBtn"
        //   onClick="handleRegister()"
      >
        <div className="spinner"></div>
        <span className="btn-text">Crear mi cuenta gratis</span>
      </button>

      <div className="divider">o regístrate con</div>

      <button
        className="btn-social"
        // onClick="socialLogin('Google')"
      >
        <img src="resources/svg/google.svg" alt="Google" />
        Continuar con Google
      </button>

      <div className="switch-link">
        ¿Ya tienes cuenta?
        <a href="#" onClick={() => switchTab('login')}>
          Iniciar sesión
        </a>
      </div>
    </>
  );
}
