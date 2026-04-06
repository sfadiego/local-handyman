const categories = [
  {
    icon: '🔧',
    name: 'Plomería',
    description: 'Fugas, instalaciones, drenajes',
    available: 247,
    color: 'bg-blue-500/10',
  },
  {
    icon: '⚡',
    name: 'Electricidad',
    description: 'Instalaciones, cortocircuitos',
    available: 189,
    color: 'bg-yellow-500/10',
  },
  {
    icon: '🪵',
    name: 'Carpintería',
    description: 'Muebles, puertas, closets',
    available: 132,
    color: 'bg-orange-800/10',
  },
  {
    icon: '🎨',
    name: 'Pintura',
    description: 'Interior, exterior, acabados',
    available: 310,
    color: 'bg-red-500/10',
  },
  {
    icon: '🌿',
    name: 'Jardinería',
    description: 'Poda, diseño, mantenimiento',
    available: 98,
    color: 'bg-green-500/10',
  },
  {
    icon: '❄️',
    name: 'Aire acondicionado',
    description: 'Instalación, limpieza, recarga',
    available: 76,
    color: 'bg-slate-500/10',
  },
];

export default function PopularServices() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
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
            className="text-[0.9rem] font-semibold text-[var(--amber-dark)] no-underline"
          >
            Ver todos →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          {categories.map((category, key) => (
            <div className="service-card" key={key}>
              <div className={`service-icon ${category.color}`}>
                {category.icon}
              </div>
              <div>
                <div className="font-['Syne',sans-serif] font-bold mb-1">
                  {category.name}
                </div>
                <div className="text-[0.83rem] text-[var(--warm-gray)]">
                  {category.description}
                </div>
                <div className="text-[0.8rem] font-semibold text-[var(--amber-dark)] mt-2">
                  {category.available} maestros disponibles
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
