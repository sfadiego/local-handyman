import React from 'react';
const clientFeatures = [
  'Perfil con fotos del trabajo previo',
  'Chat directo con el maestro',
  'Pago seguro en la app',
  'Garantía de satisfacción',
];

const providerFeatures = [
  'Gratis para registrarse',
  'Tú pones tus precios',
  'Acepta o rechaza solicitudes',
  'Cobra más con el sello verificado',
];

export default function UserTypeSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-x-10 gap-y-8">
        {/* Card Cliente */}
        <div className="bg-[var(--cream)] border border-black/[0.07] rounded-[28px] p-10">
          <div className="w-[52px] h-[52px] bg-amber-400/[0.12] rounded-2xl flex items-center justify-center text-2xl mb-6">
            🏠
          </div>
          <h3 className="font-['Syne',sans-serif] text-[1.6rem] font-extrabold mb-3">
            Soy cliente
          </h3>
          <p className="text-[var(--warm-gray)] leading-[1.7] mb-6">
            Encuentra al maestro correcto en minutos. Compara precios, lee
            reseñas reales y agenda cuando tú quieras, sin llamadas ni esperas.
          </p>
          <ul className="flex flex-col gap-[0.6rem] mb-8">
            {clientFeatures.map((feature) => (
              <li key={feature} className="text-[0.9rem] flex gap-2">
                <span className="text-[var(--amber)]">✓</span> {feature}
              </li>
            ))}
          </ul>
          <a href="#" className="btn-amber">
            Buscar un maestro
          </a>
        </div>

        {/* Card Maestro */}
        <div className="bg-[var(--charcoal)] rounded-[28px] p-10 text-white">
          <div className="w-[52px] h-[52px] bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6">
            🔧
          </div>
          <h3 className="font-['Syne',sans-serif] text-[1.6rem] font-extrabold mb-3">
            Soy maestro
          </h3>
          <p className="text-white/65 leading-[1.7] mb-6">
            Deja de depender del boca a boca. Crea tu perfil, define tus
            horarios y recibe clientes de tu zona directamente en tu celular.
          </p>
          <ul className="flex flex-col gap-[0.6rem] mb-8">
            {providerFeatures.map((feature) => (
              <li key={feature} className="text-[0.9rem] flex gap-2">
                <span className="text-[var(--amber)]">✓</span> {feature}
              </li>
            ))}
          </ul>
          <a href="#" className="btn-amber">
            Registrar mi oficio
          </a>
        </div>
      </div>
    </section>
  );
}
