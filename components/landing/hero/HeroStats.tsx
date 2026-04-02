const stats = [
  { icon: "🔨", value: "2,400+", label: "maestros" },
  { icon: "⭐", value: "4.9", label: "promedio" },
  { icon: "✅", value: "100%", label: "verificados" },
];

export default function HeroStats() {
  return (
    <div className="hero-actions animate-slide-up opacity-0-start delay-400">
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {stats.map((stat, key) => (
          <div key={key} className="stat-pill">
            <span style={{ fontSize: "1rem" }}>{stat.icon}</span>
            <span>
              <strong>{stat.value}</strong> {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
