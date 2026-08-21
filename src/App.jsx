import { useState } from "react";

const NAVY = "#16324F";
const ACCENT = "#2F6690";
const GOLD = "#B08A3E";
const TEXT = "#1E2430";
const MUTED = "#5B6472";
const BORDER = "#E4E7EC";

const projects = [
  {
    title: "LUMIÈRE Hair Studio Management System",
    stack: ["React", "React Router", "Axios", "Formik & Yup", "MockAPI"],
    desc: "Full CRUD salon management system for services, staff and appointments, with client-side routing and validated forms.",
    live: "https://lumiere-hair-studio-management-syst.vercel.app/",
    repo: "https://github.com/dilawar-hamid/lumiere-hair-studio-management-system",
  },
  {
    title: "Currency Converter",
    stack: ["React", "REST API", "Custom Hooks"],
    desc: "Real-time currency converter consuming a live exchange-rate API, built with custom hooks for a smooth, responsive UX.",
    live: "https://dilawar-hamid.github.io/currency-converter/",
    repo: "https://github.com/dilawar-hamid/currency-converter",
  },
  {
    title: "React Password Generator",
    stack: ["React", "Hooks", "Reusable Components"],
    desc: "Customizable password generator with adjustable length and character-set options, built with clean, reusable components.",
    live: "https://dilawar-hamid.github.io/react-password-generator/",
    repo: "https://github.com/dilawar-hamid/react-password-generator",
  },
  {
    title: "Hospital Management System",
    stack: ["PHP", "MySQL", "Bootstrap"],
    desc: "Web-based hospital system with patient registration, doctor management, appointment scheduling and role-based auth.",
    live: null,
    repo: "https://github.com/dilawar-hamid",
  },
];

const skillGroups = [
  { label: "Frontend", items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "React Router", "Axios", "Formik & Yup"] },
  { label: "Backend", items: ["PHP", "Laravel", "MySQL", "MVC", "RESTful APIs", "Auth & RBAC"] },
  { label: "Tools", items: ["Git & GitHub", "VS Code", "XAMPP", "Vercel", "Vite", "npm"] },
];

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function CVModal({ onClose }) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(22,50,79,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 50, padding: "24px",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF", borderRadius: 10, border: `1px solid ${BORDER}`,
          maxWidth: 640, width: "100%", maxHeight: "85vh", overflowY: "auto",
          padding: "32px 36px", color: TEXT, boxShadow: "0 20px 60px rgba(22,50,79,0.25)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <h2 style={{ fontFamily: "'Source Serif 4', serif", margin: "0 0 4px", fontSize: 26, color: NAVY }}>Dilawar Hamid</h2>
            <p style={{ color: MUTED, margin: 0, fontSize: 14 }}>
              Frontend Developer • React.js | JavaScript | API Integration
            </p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: MUTED, fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
        </div>

        <p style={{ fontSize: 13, color: MUTED, margin: "0 0 20px" }}>
          North Karachi, Pakistan &nbsp;•&nbsp; dilawarhamid446@gmail.com &nbsp;•&nbsp; 0315-4573662
        </p>

        <p style={{ fontSize: 14, lineHeight: 1.7, color: TEXT, marginBottom: 22 }}>
          Frontend Developer with hands-on experience building responsive, component-based web
          applications using React.js, JavaScript and modern tooling. Solid backend foundation in
          PHP, Laravel and MySQL, with multiple live projects deployed — including a full
          CRUD-based salon management system.
        </p>

        <h3 style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: ACCENT, marginBottom: 8 }}>Skills</h3>
        {skillGroups.map((g) => (
          <p key={g.label} style={{ fontSize: 13, color: TEXT, margin: "4px 0" }}>
            <b style={{ color: NAVY }}>{g.label}:</b> {g.items.join(", ")}
          </p>
        ))}

        <h3 style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: ACCENT, margin: "20px 0 8px" }}>Education</h3>
        <p style={{ fontSize: 13, color: TEXT, margin: "2px 0" }}>Software Engineering Diploma — Aptech (2024–2027)</p>
        <p style={{ fontSize: 13, color: TEXT, margin: "2px 0" }}>Second Year Engineering — BIEK (2024–2026, result awaited)</p>
        <p style={{ fontSize: 13, color: TEXT, margin: "2px 0" }}>Matriculation — BSEK (2023–2024)</p>

        <a
          href="/Dilawar_Hamid_Resume.pdf"
          download
          style={{
            display: "inline-block", marginTop: 24, padding: "11px 22px",
            background: NAVY, color: "#FFFFFF", fontWeight: 600, borderRadius: 6,
            textDecoration: "none", fontSize: 14,
          }}
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [showCV, setShowCV] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: TEXT, fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Nav */}
      <header style={{
        position: "sticky", top: 0, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)",
        borderBottom: `1px solid ${BORDER}`, zIndex: 20,
      }}>
        <div style={{
          maxWidth: 960, margin: "0 auto", padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontFamily: "'Source Serif 4', serif", fontWeight: 700, fontSize: 18, color: NAVY }}>Dilawar Hamid</span>
          <nav style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{ background: "none", border: "none", color: MUTED, fontSize: 14, cursor: "pointer", padding: 0 }}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        {/* Hero */}
        <section style={{ padding: "72px 0 56px", borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>
            Frontend Developer
          </p>
          <h1 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 44, lineHeight: 1.15, margin: "0 0 18px", color: NAVY, maxWidth: 640 }}>
            Building responsive, component-based web applications with React.
          </h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.7, maxWidth: 560, margin: "0 0 32px" }}>
            React.js, JavaScript and modern tooling on the frontend, with a solid backend
            foundation in PHP, Laravel and MySQL. I've built and deployed several live projects,
            including a full CRUD-based salon management system, and I'm looking to join a
            frontend or full-stack team.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => setShowCV(true)}
              style={{
                padding: "12px 24px", background: "#FFFFFF", border: `1.5px solid ${NAVY}`,
                color: NAVY, borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              View CV
            </button>
            <a
              href="/Dilawar_Hamid_Resume.pdf"
              download
              style={{
                padding: "12px 24px", background: NAVY, color: "#FFFFFF", fontWeight: 600,
                borderRadius: 6, fontSize: 14, textDecoration: "none",
              }}
            >
              Download CV
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ padding: "56px 0", borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>About</p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: TEXT, maxWidth: 680 }}>
            I'm a detail-oriented, quick-learning developer comfortable working across the stack —
            from building validated, component-based UIs in React to designing relational
            databases and role-based authentication in PHP and Laravel. I care about clean
            component structure, reusable patterns and shipping projects that actually work in
            production, not just in a demo.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: "56px 0", borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>Skills</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 17, color: NAVY, margin: "0 0 10px" }}>{g.label}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.items.map((s) => (
                    <span key={s} style={{
                      padding: "6px 13px", border: `1px solid ${BORDER}`, borderRadius: 20,
                      fontSize: 13, color: TEXT, background: "#F7F8FA",
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: "56px 0", borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>Projects</p>
          <div style={{ display: "grid", gap: 20 }}>
            {projects.map((p) => (
              <div key={p.title} style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: "22px 24px", background: "#FBFBFC" }}>
                <h3 style={{ margin: "0 0 8px", fontFamily: "'Source Serif 4', serif", fontSize: 19, color: NAVY }}>{p.title}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{ fontSize: 12, color: ACCENT, border: `1px solid ${ACCENT}`, borderRadius: 4, padding: "3px 9px" }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 18 }}>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ color: NAVY, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Live demo →</a>}
                  <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: MUTED, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>GitHub →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" style={{ padding: "56px 0", borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Education</p>
          <div style={{ display: "grid", gap: 12 }}>
            <p style={{ fontSize: 15, color: TEXT, margin: 0 }}><b style={{ color: NAVY }}>Software Engineering Diploma</b> — Aptech &nbsp;<span style={{ color: MUTED }}>(2024–2027)</span></p>
            <p style={{ fontSize: 15, color: TEXT, margin: 0 }}><b style={{ color: NAVY }}>Second Year Engineering</b> — BIEK &nbsp;<span style={{ color: MUTED }}>(2024–2026, result awaited)</span></p>
            <p style={{ fontSize: 15, color: TEXT, margin: 0 }}><b style={{ color: NAVY }}>Matriculation</b> — BSEK &nbsp;<span style={{ color: MUTED }}>(2023–2024)</span></p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: "56px 0 90px" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Contact</p>
          <p style={{ fontSize: 15, color: TEXT, margin: "6px 0" }}>Email — <a href="mailto:dilawarhamid446@gmail.com" style={{ color: NAVY }}>dilawarhamid446@gmail.com</a></p>
          <p style={{ fontSize: 15, color: TEXT, margin: "6px 0" }}>Phone — 0315-4573662</p>
          <p style={{ fontSize: 15, color: TEXT, margin: "6px 0" }}>Location — North Karachi, Pakistan</p>
          <p style={{ fontSize: 15, color: TEXT, margin: "6px 0" }}>GitHub — <a href="https://github.com/dilawar-hamid" target="_blank" rel="noreferrer" style={{ color: NAVY }}>github.com/dilawar-hamid</a></p>
        </section>
      </div>

      {showCV && <CVModal onClose={() => setShowCV(false)} />}
    </div>
  );
}
