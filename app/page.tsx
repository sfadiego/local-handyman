'use client';

import { CustomerCard } from '@/components/landing/customerCard';
import { ProfileQualifiedCard } from '@/components/landing/profileQualifiedCard';
import { ServiciosCard } from '@/components/landing/serviciosCard';
import { SlideJobs } from '@/components/landing/slideJobs';
import { StepCard } from '@/components/landing/stepCard';
import PageWrapper from '@/components/layout/pageWrapper';
import Section from '@/components/ui/section';
import { Title } from '@/components/ui/titles';
import { BrushCleaning, Hammer, Leaf, MapPin, MessageCircle, Palette, Search, Star, Wrench, Zap } from 'lucide-react';
import { useHomePage } from './useHomePage';

export default function HomePage() {
  const { isMounted } = useHomePage();

  return (
    <PageWrapper>
      <Section className="hero">
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

          <div
            style={{
              display: isMounted && typeof window !== 'undefined' && window.innerWidth > 768 ? 'block' : 'none',
              position: 'relative',
              height: '480px',
            }}
            id="heroCards"
          >
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

      <div
        style={{
          background: 'white',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="marquee-wrapper">
          <SlideJobs />
        </div>
      </div>

      {/* CÓMO FUNCIONA */}
      <Section style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
          <StepCard
            stepNum="01"
            icon={<Search />}
            title="Busca en tu zona"
            description="Escribe tu problema o selecciona de nuestros servicios populares."
          />
          <StepCard
            stepNum="02"
            icon={<MapPin />}
            title="Encuentra maestros cerca"
            description="Te mostramos maestros verificados en tu zona con disponibilidad inmediata, reseñas y precio estimado."
          />
          <StepCard
            stepNum="03"
            icon={<MessageCircle />}
            title="Acuerda y agenda"
            description="Chatea directamente con el maestro, acuerda el precio y agenda la visita desde la app."
          />
          <StepCard
            stepNum="04"
            icon={<Star />}
            title="Paga y califica"
            description="Paga de forma segura a través de la plataforma y deja tu reseña para ayudar a la comunidad."
          />
        </div>
      </Section>

      {/* <!-- SERVICIOS POPULARES --> */}
      <Section style={{ background: 'white', padding: '5rem 2rem' }}>
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
            {/* TODO: crear loop */}
            <ServiciosCard title="Plomería" description="Fugas, instalaciones, drenajes" available={247} icon={<Wrench />} />
            <ServiciosCard title="Electricidad" description="Instalaciones, cortocircuitos" available={189} icon={<Zap />} />
            <ServiciosCard title="Carpintería" description="Puertas, muebles, reparaciones" available={156} icon={<Hammer />} />
            <ServiciosCard title="Pintura" description="Interior, exterior, decoración" available={134} icon={<Palette />} />
            <ServiciosCard title="Jardinería" description="Cortes, plantas, mantenimiento" available={98} icon={<Leaf />} />
            <ServiciosCard title="Limpieza" description="General, profunda, especializada" available={203} icon={<BrushCleaning />} />
          </div>
        </div>
      </Section>

      {/* <!-- MAESTROS DESTACADOS --> */}
      <Section style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
          <ProfileQualifiedCard name="Juan Pérez" specialty="Plomería" location="Santiago" verified={true} price={25000} worksmade={143} />
          <ProfileQualifiedCard name="Rosa garcia" specialty="Electricista" location="Manzanillo" verified={true} price={25000} worksmade={20} />
          <ProfileQualifiedCard
            name="Carlos Ávila"
            specialty="Carpintero"
            location="Villa de Alvarez"
            verified={true}
            price={25000}
            worksmade={211}
          />
        </div>
      </Section>

      {/* <!-- DOS PERFILES --> */}
      <Section style={{ background: 'white', padding: '5rem 2rem' }}>
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
          <CustomerCard title="Encuentra el maestro ideal" description="Busca y contrata a los mejores profesionales cerca de ti." style="dark" />
          <CustomerCard title="Gestiona tus proyectos" description="Sigue el progreso de tus trabajos y comunícate con tus maestros." style="light" />

          {/* <JobMasterCard /> */}
        </div>
      </Section>

      {/* <!-- CTA --> */}
      <Section
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
      </Section>
    </PageWrapper>
  );
}
