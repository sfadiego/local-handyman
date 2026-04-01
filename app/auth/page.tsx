import { Eye, Lock, Mail } from 'lucide-react';

export default function AuthPage() {
  return (
    <>
      <a href="oficio-landing.html" className="back-home">
        ← Inicio
      </a>

      <div className="page">
        {/* <!-- ══════════════ LEFT PANEL ══════════════ --> */}
        <div className="left-panel">
          <div className="grid-lines"></div>

          {/* <!-- Logo --> */}
          <a href="#" className="logo fade-in">
            oficio<span>.</span>
          </a>

          {/* <!-- Main content --> */}
          <div className="left-content">
            <div className="left-tag fade-up d1">✦ &nbsp;Bienvenido de vuelta</div>

            <h1 className="left-title fade-up d2">
              Tu oficio
              <br />
              merece ser
              <br />
              <em>encontrado.</em>
            </h1>

            <p className="left-sub fade-up d3">
              Miles de clientes buscan un maestro de confianza hoy mismo en tu zona. Regístrate y empieza a recibir solicitudes.
            </p>

            {/* <!-- Testimonial --> */}
            <div className="testimonial fade-up d4">
              <p className="testimonial-text">
                "En un mes ya tenía agenda llena. Oficio me dio la visibilidad que nunca pude tener de boca en boca."
              </p>
              <div className="testimonial-author">
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                  JM
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>Juan Morales</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.45)' }}>Plomero · Colima</div>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Stats --> */}
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
        <div className="right-panel">
          <div className="form-container scale-in">
            <div className="tab-bar" id="tabBar">
              <button className="tab-btn active">Iniciar sesión</button>
              <button className="tab-btn">Registrarse</button>
            </div>
            <div id="loginForm">
              <h2 className="form-title fade-up d1">Bienvenido de vuelta</h2>
              <p className="form-sub fade-up d2">Ingresa tus datos para continuar</p>

              {/* Role selector */}
              <div className="role-selector fade-up d2" id="loginRoles">
                <button className="role-btn active" data-role="client">
                  <div className="role-check">✓</div>
                  <span className="role-icon">🏠</span>
                  <span className="role-name">Soy cliente</span>
                  <span className="role-desc">Busco un servicio</span>
                </button>
                <button className="role-btn" data-role="provider">
                  <div className="role-check">✓</div>
                  <span className="role-icon">🔧</span>
                  <span className="role-name">Soy maestro</span>
                  <span className="role-desc">Ofrezco servicios</span>
                </button>
              </div>

              <div className="field fade-up d3">
                <label>Correo electrónico</label>
                <div className="input-wrap">
                  <span className="input-icon">
                    <Mail />
                  </span>
                  <input type="email" id="loginEmail" placeholder="tu@correo.com" />
                </div>
                <div className="field-error" id="loginEmailErr">
                  Ingresa un correo válido
                </div>
              </div>

              <div className="field fade-up d4">
                <label>Contraseña</label>
                <div className="input-wrap">
                  <span className="input-icon">
                    <Lock />
                  </span>
                  <input type="password" id="loginPass" placeholder="••••••••" />
                  <button className="eye-btn" type="button">
                    <Eye />
                  </button>
                </div>
                <div className="field-error" id="loginPassErr">
                  Ingresa tu contraseña
                </div>
              </div>

              <div className="forgot-row fade-up d4">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>

              <button className="btn-submit fade-up d5" id="loginBtn">
                <div className="spinner"></div>
                <span className="btn-text">Entrar a mi cuenta</span>
              </button>

              <div className="divider fade-up d5">o continúa con</div>

              <button className="btn-social fade-up d6">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar con Google
              </button>

              <div className="switch-link fade-up d6">
                ¿No tienes cuenta?
                <a href="#">Regístrate gratis</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
