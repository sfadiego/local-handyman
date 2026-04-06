import React from 'react';
import HeroFloatingCards from './hero/HeroFloatingCards';
import HeroSearch from './hero/HeroSearch';
import HeroStats from './hero/HeroStats';

export default function Hero() {
  return (
    <section className="hero">
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

          <h1 className="animate-slide-up opacity-0-start delay-100">
            El maestro
            <br />
            que necesitas,
            <br />
            <em>hoy mismo.</em>
          </h1>

          <p className="hero-sub animate-slide-up opacity-0-start delay-200">
            Conectamos a personas que necesitan un servicio con los mejores
            maestros verificados de su zona. Rápido, seguro y sin
            complicaciones.
          </p>

          <HeroSearch />
          <HeroStats />
        </div>
        <HeroFloatingCards />
      </div>
    </section>
  );
}
