'use client';

import './auth.css';
import { LoginForm } from './login/login-form';
import { RegisterForm } from './register/register-form';
import { SuccessRegister } from './register/success-register';
import { useAuth } from './useAuth';

export default function AuthPage() {
  const { switchTab, currentTab, selectRegisterRole, registerRole, loginRole } =
    useAuth();
  return (
    <>
      <a href="/" className="back-home">
        ← Inicio
      </a>
      <div className="page">
        {/* ══════════════ LEFT PANEL ══════════════ */}
        <div className="left-panel">
          <div className="grid-lines"></div>

          {/* Logo */}
          <a href="#" className="logo fade-in">
            oficio<span>.</span>
          </a>

          {/* Main content */}
          <div className="left-content">
            <div className="left-tag fade-up d1">
              ✦ &nbsp;Bienvenido de vuelta
            </div>

            <h1 className="left-title fade-up d2">
              Tu oficio
              <br />
              merece ser
              <br />
              <em>encontrado.</em>
            </h1>

            <p className="left-sub fade-up d3">
              Miles de clientes buscan un maestro de confianza hoy mismo en tu
              zona. Regístrate y empieza a recibir solicitudes.
            </p>

            {/* Testimonial */}
            <div className="testimonial fade-up d4">
              <p className="testimonial-text">
                &ldquo;En un mes ya tenía agenda llena. Oficio me dio la
                visibilidad que nunca pude tener de boca en boca.&rdquo;
              </p>
              <div className="testimonial-author">
                <div
                  className="avatar"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  }}
                >
                  JM
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'white',
                    }}
                  >
                    Juan Morales
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Plomero · Colima
                  </div>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row fade-up d5">
            <div className="stat-item">
              <div className="stat-num">
                2.4<span>k</span>
              </div>
              <div className="stat-label">Maestros activos</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                4.9<span>★</span>
              </div>
              <div className="stat-label">Calificación media</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                98<span>%</span>
              </div>
              <div className="stat-label">Satisfacción</div>
            </div>
          </div>
        </div>

        {/* ══════════════ RIGHT PANEL ══════════════ */}
        <div className="right-panel">
          <div className="form-container scale-in">
            <div
              className="tab-bar"
              style={{ display: currentTab === 'success' ? 'none' : '' }}
              id="tabBar"
            >
              <button
                className={`tab-btn ${currentTab === 'login' ? 'active' : ''}`}
                onClick={() => switchTab('login')}
              >
                Iniciar sesión
              </button>
              <button
                className={`tab-btn ${currentTab === 'register' ? 'active' : ''}`}
                onClick={() => switchTab('register')}
              >
                Registrarse
              </button>
            </div>

            <div
              className={currentTab === 'login' ? '' : 'hidden'}
              id="loginForm"
            >
              <LoginForm loginRole={loginRole} switchTab={switchTab} />
            </div>

            <div
              className={currentTab === 'register' ? '' : 'hidden'}
              id="registerForm"
            >
              <RegisterForm
                switchTab={switchTab}
                selectRegisterRole={selectRegisterRole}
                registerRole={registerRole}
              />
            </div>

            <SuccessRegister
              isShow={currentTab === 'success'}
              switchTab={switchTab}
            />
          </div>
        </div>
      </div>
    </>
  );
}
