import { Search } from 'lucide-react';
import React from 'react';

export default function HeroSearch() {
  return (
    <div
      className="animate-slide-up opacity-0-start delay-300"
      style={{ marginBottom: '1.5rem' }}
    >
      <div className="search-bar">
        <Search style={{ width: '18px', height: '18px' }} />
        <input
          type="text"
          placeholder="¿Qué servicio necesitas? Ej: plomería..."
        />
        <button
          className="btn-primary"
          style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
