import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="nav-logo">
        oficio<span>.</span>
      </div>
      <div
        style={{
          fontSize: "0.82rem",
          color: "var(--warm-gray)",
        }}
      >
        © 2025 Oficio. Hecho con ❤️ en México.
      </div>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "0.82rem",
            color: "var(--warm-gray)",
            textDecoration: "none",
          }}
        >
          Privacidad
        </a>
        <a
          href="#"
          style={{
            fontSize: "0.82rem",
            color: "var(--warm-gray)",
            textDecoration: "none",
          }}
        >
          Términos
        </a>
        <a
          href="#"
          style={{
            fontSize: "0.82rem",
            color: "var(--warm-gray)",
            textDecoration: "none",
          }}
        >
          Contacto
        </a>
      </div>
    </footer>
  );
}
