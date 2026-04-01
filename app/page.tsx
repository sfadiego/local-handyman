'use client';

import PageWrapper from '@/components/layout/pageWrapper';
import Section from '@/components/ui/section';
import { Title } from '@/components/ui/titles';
import { Search } from 'lucide-react';
import { useHomePage } from './useHomePage';

export default function HomePage() {
  const { isMounted } = useHomePage();

  return (
    <PageWrapper>
      <Section className="hero">
        {/* BG circles */}
        <div
          className="hero-bg-circle"
          style={{
            width: '600px',
            height: '600px',
            top: '-100px',
            right: '-150px',
          }}
        ></div>
        <div
          className="hero-bg-circle"
          style={{
            width: '300px',
            height: '300px',
            bottom: '50px',
            left: '-80px',
            opacity: '0.6',
          }}
        ></div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <div className="hero-tag animate-slide-up opacity-0-start">
              <span>✦</span> Servicios cerca de ti
            </div>
            <Title type="h1" className="animate-slide-up opacity-0-start delay-100">
              El maestro
              <br />
              que necesitas,
              <br />
              <em>hoy mismo.</em>
            </Title>

            <p className="hero-sub animate-slide-up opacity-0-start delay-200">
              Conectamos a personas que necesitan un servicio con los mejores maestros verificados de su zona. Rápido, seguro y sin complicaciones.
            </p>

            {/* <!-- Search --> */}
            <div className="animate-slide-up opacity-0-start delay-300" style={{ marginBottom: '1.5rem' }}>
              <div className="search-bar">
                <Search style={{ width: '18px', height: '18px', fill: 'none' }} />
                <input type="text" placeholder="¿Qué servicio necesitas? Ej: plomería..." />
                <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                  Buscar
                </button>
              </div>
            </div>

            <div className="hero-actions animate-slide-up opacity-0-start delay-400">
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div className="stat-pill">
                  <span style={{ fontSize: '1rem' }}>🔨</span>
                  <span>
                    <strong>2,400+</strong> maestros
                  </span>
                </div>
                <div className="stat-pill">
                  <span style={{ fontSize: '1rem' }}>⭐</span>
                  <span>
                    <strong>4.9</strong> promedio
                  </span>
                </div>
                <div className="stat-pill">
                  <span style={{ fontSize: '1rem' }}>✅</span>
                  <span>100% verificados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: floating cards */}
          <div
            style={{
              display: isMounted && typeof window !== 'undefined' && window.innerWidth > 768 ? 'block' : 'none',
              position: 'relative',
              height: '480px',
            }}
            id="heroCards"
          >
            {/* Main profile card */}
            <div
              className="float-card"
              style={{
                position: 'absolute',
                top: '40px',
                left: '20px',
                width: '260px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: 'white',
                    fontWeight: '700',
                  }}
                >
                  JM
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: '700',
                      fontSize: '0.95rem',
                    }}
                  >
                    Juan Morales
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>Plomero · 8 años exp.</div>
                </div>
                <div className="online-dot" style={{ marginLeft: 'auto' }}></div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.75rem',
                }}
              >
                <span className="star">★★★★★</span>
                <span style={{ fontSize: '0.82rem', fontWeight: '600' }}>4.97</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>(143 reseñas)</span>
              </div>
              <div className="badge-verified">✓ Maestro Verificado</div>
              <div
                style={{
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: '700',
                  }}
                >
                  $250
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      color: 'var(--warm-gray)',
                    }}
                  >
                    /hr
                  </span>
                </span>
                <button className="btn-amber" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}>
                  Contratar
                </button>
              </div>
            </div>

            {/* <!-- Notification card --> */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                right: '10px',
                background: 'var(--charcoal)',
                color: 'white',
                borderRadius: '16px',
                padding: '0.9rem 1.2rem',
                width: '200px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  opacity: 0.6,
                  marginBottom: '0.3rem',
                }}
              >
                Nueva solicitud
              </div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: '700',
                  fontSize: '0.9rem',
                }}
              >
                Fuga de agua 🚰
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  opacity: 0.7,
                  marginTop: '0.25rem',
                }}
              >
                Hace 2 min · 1.2km
              </div>
            </div>

            {/* Rating notification */}
            <div
              style={{
                position: 'absolute',
                bottom: '80px',
                right: '0px',
                background: 'white',
                borderRadius: '16px',
                padding: '0.9rem 1.2rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                width: '185px',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--warm-gray)',
                  marginBottom: '0.3rem',
                }}
              >
                Reseña nueva ⭐
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: '500' }}>"Excelente trabajo, muy puntual"</div>
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.2rem' }}>
                <span style={{ fontSize: '1rem' }}>★★★★★</span>
              </div>
            </div>

            {/* Map ping */}
            <div
              style={{
                position: 'absolute',
                bottom: '60px',
                left: '30px',
                background: 'var(--amber)',
                color: 'var(--charcoal)',
                borderRadius: '12px',
                padding: '0.6rem 1rem',
                fontSize: '0.82rem',
                fontWeight: '700',
                fontFamily: "'Syne',sans-serif",
                boxShadow: '0 4px 15px rgba(245,158,11,0.4)',
              }}
            >
              📍 3 maestros cerca
            </div>
          </div>
        </div>
      </Section>

      {/* MARQUEE: servicios */}
      <div
        style={{
          background: 'white',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-item">🔧 Plomería</div>
            <div className="marquee-item">⚡ Electricidad</div>
            <div className="marquee-item">🪵 Carpintería</div>
            <div className="marquee-item">🎨 Pintura</div>
            <div className="marquee-item">🧱 Albañilería</div>
            <div className="marquee-item">❄️ Aire acondicionado</div>
            <div className="marquee-item">🔑 Cerrajería</div>
            <div className="marquee-item">🌿 Jardinería</div>
            <div className="marquee-item">🪟 Vidriería</div>
            <div className="marquee-item">🛁 Remodelaciones</div>
            {/* <!-- duplicado para loop --> */}
            <div className="marquee-item">🔧 Plomería</div>
            <div className="marquee-item">⚡ Electricidad</div>
            <div className="marquee-item">🪵 Carpintería</div>
            <div className="marquee-item">🎨 Pintura</div>
            <div className="marquee-item">🧱 Albañilería</div>
            <div className="marquee-item">❄️ Aire acondicionado</div>
            <div className="marquee-item">🔑 Cerrajería</div>
            <div className="marquee-item">🌿 Jardinería</div>
            <div className="marquee-item">🪟 Vidriería</div>
            <div className="marquee-item">🛁 Remodelaciones</div>
          </div>
        </div>
      </div>

      {/* CÓMO FUNCIONA */}
      <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">Proceso</div>
          <h2 className="section-title">
            Tan fácil como
            <br />
            pedir un taxi
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
            gap: '1.5rem',
          }}
        >
          <div className="step-card">
            <div className="step-num">01</div>
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'rgba(245,158,11,0.12)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1rem',
              }}
            >
              🔍
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: '700',
                marginBottom: '0.5rem',
              }}
            >
              Describe tu problema
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--warm-gray)',
                lineHeight: '1.6',
              }}
            >
              Cuéntanos qué necesitas. Puede ser tan simple como "se me fue el agua" o "se fundió un foco".
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">02</div>
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'rgba(245,158,11,0.12)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1rem',
              }}
            >
              📍
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: '700',
                marginBottom: '0.5rem',
              }}
            >
              Encuentra maestros cerca
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--warm-gray)',
                lineHeight: '1.6',
              }}
            >
              Te mostramos maestros verificados en tu zona con disponibilidad inmediata, reseñas y precio estimado.
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">03</div>
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'rgba(245,158,11,0.12)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1rem',
              }}
            >
              💬
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: '700',
                marginBottom: '0.5rem',
              }}
            >
              Acuerda y agenda
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--warm-gray)',
                lineHeight: '1.6',
              }}
            >
              Chatea directamente con el maestro, acuerda el precio y agenda la visita desde la app.
            </p>
          </div>

          <div className="step-card">
            <div className="step-num">04</div>
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'rgba(245,158,11,0.12)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1rem',
              }}
            >
              ⭐
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: '700',
                marginBottom: '0.5rem',
              }}
            >
              Paga y califica
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--warm-gray)',
                lineHeight: '1.6',
              }}
            >
              Paga de forma segura a través de la plataforma y deja tu reseña para ayudar a la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- SERVICIOS POPULARES --> */}
      <section style={{ background: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div className="section-label">Categorías</div>
              <h2 className="section-title">
                Servicios más
                <br />
                solicitados
              </h2>
            </div>
            <a
              href="#"
              style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: 'var(--amber-dark)',
                textDecoration: 'none',
              }}
            >
              Ver todos →
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
              gap: '1rem',
            }}
          >
            <div className="service-card">
              <div className="service-icon" style={{ background: 'rgba(59,130,246,0.1)' }}>
                🔧
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                  }}
                >
                  Plomería
                </div>
                <div style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>Fugas, instalaciones, drenajes</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--amber-dark)',
                    marginTop: '0.5rem',
                  }}
                >
                  247 maestros disponibles
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon" style={{ background: 'rgba(234,179,8,0.1)' }}>
                ⚡
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                  }}
                >
                  Electricidad
                </div>
                <div style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>Instalaciones, cortocircuitos</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--amber-dark)',
                    marginTop: '0.5rem',
                  }}
                >
                  189 maestros disponibles
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon" style={{ background: 'rgba(180,83,9,0.1)' }}>
                🪵
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                  }}
                >
                  Carpintería
                </div>
                <div style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>Muebles, puertas, closets</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--amber-dark)',
                    marginTop: '0.5rem',
                  }}
                >
                  132 maestros disponibles
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon" style={{ background: 'rgba(239,68,68,0.1)' }}>
                🎨
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                  }}
                >
                  Pintura
                </div>
                <div style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>Interior, exterior, acabados</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--amber-dark)',
                    marginTop: '0.5rem',
                  }}
                >
                  310 maestros disponibles
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon" style={{ background: 'rgba(34,197,94,0.1)' }}>
                🌿
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                  }}
                >
                  Jardinería
                </div>
                <div style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>Poda, diseño, mantenimiento</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--amber-dark)',
                    marginTop: '0.5rem',
                  }}
                >
                  98 maestros disponibles
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon" style={{ background: 'rgba(100,116,139,0.1)' }}>
                ❄️
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                  }}
                >
                  Aire acondicionado
                </div>
                <div style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>Instalación, limpieza, recarga</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--amber-dark)',
                    marginTop: '0.5rem',
                  }}
                >
                  76 maestros disponibles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- MAESTROS DESTACADOS --> */}
      <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">Comunidad</div>
          <h2 className="section-title">
            Maestros mejor
            <br />
            calificados
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
            gap: '1.5rem',
          }}
        >
          {/* <!-- Card 1 --> */}
          <div className="profile-card">
            <div
              style={{
                height: '90px',
                background: 'linear-gradient(135deg,#1C1917,#44403C)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-28px',
                  left: '1.5rem',
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                  borderRadius: '50%',
                  border: '3px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: 'white',
                  fontWeight: '800',
                }}
              >
                JM
              </div>
            </div>
            <div style={{ padding: '2.25rem 1.5rem 1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.25rem',
                }}
              >
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>Juan Morales</div>
                <div className="online-dot"></div>
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--warm-gray)',
                  marginBottom: '0.6rem',
                }}
              >
                Plomero · Colima, Col.
              </div>
              <div className="badge-verified" style={{ marginBottom: '0.75rem' }}>
                ✓ Verificado
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1rem',
                }}
              >
                <span className="star">★★★★★</span>
                <span style={{ fontSize: '0.82rem', fontWeight: '700' }}>4.97</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>· 143 trabajos</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>
                  $250
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '400',
                      color: 'var(--warm-gray)',
                    }}
                  >
                    /hr
                  </span>
                </span>
                <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}>
                  Ver perfil
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="profile-card">
            <div
              style={{
                height: '90px',
                background: 'linear-gradient(135deg,#1D4ED8,#1E40AF)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-28px',
                  left: '1.5rem',
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg,#3B82F6,#2563EB)',
                  borderRadius: '50%',
                  border: '3px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: 'white',
                  fontWeight: '800',
                }}
              >
                RG
              </div>
            </div>
            <div style={{ padding: '2.25rem 1.5rem 1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.25rem',
                }}
              >
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>Rosa García</div>
                <div className="online-dot"></div>
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--warm-gray)',
                  marginBottom: '0.6rem',
                }}
              >
                Electricista · Manzanillo
              </div>
              <div className="badge-verified" style={{ marginBottom: '0.75rem' }}>
                ✓ Verificado
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1rem',
                }}
              >
                <span className="star">★★★★★</span>
                <span style={{ fontSize: '0.82rem', fontWeight: '700' }}>4.95</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>· 98 trabajos</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>
                  $300
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '400',
                      color: 'var(--warm-gray)',
                    }}
                  >
                    /hr
                  </span>
                </span>
                <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}>
                  Ver perfil
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="profile-card">
            <div
              style={{
                height: '90px',
                background: 'linear-gradient(135deg,#065F46,#047857)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-28px',
                  left: '1.5rem',
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg,#10B981,#059669)',
                  borderRadius: '50%',
                  border: '3px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: 'white',
                  fontWeight: '800',
                }}
              >
                CA
              </div>
            </div>
            <div style={{ padding: '2.25rem 1.5rem 1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.25rem',
                }}
              >
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>Carlos Ávila</div>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    background: '#94A3B8',
                    borderRadius: '50%',
                  }}
                ></div>
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--warm-gray)',
                  marginBottom: '0.6rem',
                }}
              >
                Carpintero · Villa de Álvarez
              </div>
              <div className="badge-verified" style={{ marginBottom: '0.75rem' }}>
                ✓ Verificado
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1rem',
                }}
              >
                <span className="star">★★★★★</span>
                <span style={{ fontSize: '0.82rem', fontWeight: '700' }}>4.93</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>· 211 trabajos</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700' }}>
                  $200
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '400',
                      color: 'var(--warm-gray)',
                    }}
                  >
                    /hr
                  </span>
                </span>
                <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}>
                  Ver perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- DOS PERFILES --> */}
      <section style={{ background: 'white', padding: '5rem 2rem' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              background: 'var(--cream)',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: '28px',
              padding: '2.5rem',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                background: 'rgba(245,158,11,0.12)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              🏠
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: '1.6rem',
                fontWeight: 800,
                marginBottom: '0.75rem',
              }}
            >
              Soy cliente
            </h3>
            <p
              style={{
                color: 'var(--warm-gray)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Encuentra al maestro correcto en minutos. Compara precios, lee reseñas reales y agenda cuando tú quieras, sin llamadas ni esperas.
            </p>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                marginBottom: '2rem',
              }}
            >
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Perfil con fotos del trabajo previo
              </li>
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Chat directo con el maestro
              </li>
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Pago seguro en la app
              </li>
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Garantía de satisfacción
              </li>
            </ul>
            <a href="#" className="btn-amber">
              Buscar un maestro
            </a>
          </div>

          <div
            style={{
              background: 'var(--charcoal)',
              borderRadius: '28px',
              padding: '2.5rem',
              color: 'white',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              🔧
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: '1.6rem',
                fontWeight: 800,
                marginBottom: '0.75rem',
              }}
            >
              Soy maestro
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Deja de depender del boca a boca. Crea tu perfil, define tus horarios y recibe clientes de tu zona directamente en tu celular.
            </p>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                marginBottom: '2rem',
              }}
            >
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Gratis para registrarse
              </li>
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Tú pones tus precios
              </li>
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Acepta o rechaza solicitudes
              </li>
              <li style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>✓</span> Cobra más con el sello verificado
              </li>
            </ul>
            <a href="#" className="btn-amber">
              Registrar mi oficio
            </a>
          </div>
        </div>
      </section>

      {/* <!-- CTA --> */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '2rem 2rem 5rem',
        }}
      >
        <div className="cta-section">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label" style={{ color: 'rgba(245,158,11,0.8)', marginBottom: '1rem' }}>
              ¿Listo?
            </div>
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 'clamp(2rem,5vw,3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '1rem',
              }}
            >
              Tu próximo servicio
              <br />
              está a un clic.
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.05rem',
                marginBottom: '2rem',
              }}
            >
              Únete a miles de personas que ya encontraron su maestro de confianza.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a href="#" className="btn-amber">
                Buscar servicio ahora
              </a>
              <a
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.85rem 0',
                }}
              >
                ¿Eres maestro? Regístrate →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
