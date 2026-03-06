import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import me from "./assets/me.png";

const phone = "647-xxx-xxxx";
const email = "you@email.com";

const projects = [
  {
    title: "Super Scooper Launcher",
    desc: "Mechanical toy concept + 3D-printed prototype. Iterated on constraints, tolerances, and usability.",
    tags: ["CAD", "3D Printing", "Design"],
    link: "https://github.com/yourname",
  },
  {
    title: "Systems Programming (C)",
    desc: "C projects using file descriptors, processes, and debugging tools (gdb/valgrind).",
    tags: ["C", "Linux", "gdb", "valgrind"],
    link: "https://github.com/yourname",
  },
];

const skills = ["C", "Python", "MATLAB", "Git", "Linux", "React", "SolidWorks", "AutoCAD"];

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function PageSection({ id, title, children }) {
  return (
    <section id={id} className="pageSection">
      <div className="wrap">
        <div className="card">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function RotatingSub() {
  const items = [
    "Mechatronics Engineering • TMU",
    "Software + Hardware Projects",
    "C • Python • MATLAB • React",
    "Open to internships • 2026",
  ];

  const [i, setI] = useState(0);

  // SPEED: change this (ms)
  const intervalMs = 2200;

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), intervalMs);
    return () => clearInterval(t);
  }, []);

  return (
    <p
      key={i} // re-triggers CSS animations each change
      className="heroSub heroSubAnim heroSubGlitch"
      data-text={items[i]}
    >
      {items[i]}
    </p>
  );
}

export default function App() {
  return (
    <div className="bg">
      <div className="introOverlay">
        <div className="introContent">
          <div className="introCircle introCircle1" />
          <div className="introCircle introCircle2" />
          <div className="introLine introLine1" />
          <div className="introLine introLine2" />
          <div className="introLine introLine3" />
          <div className="introLine introLine4" />
          <div className="introLine introLine5" />
          <div className="introText">Christian Dorogan</div>
        </div>
      </div>
      <Navbar />
      <div className="glow" />

      {/* HERO PAGE */}
      <section className="heroPage" id="top">
        <div className="heroCenter">
          <h1 className="heroName">Christian Dorogan</h1>

          <img className="avatarCircle" src={me} alt="Christian Dorogan" />

          <RotatingSub />

          <a className="scrollCue" href="#about" aria-label="Scroll to about">
            ↓
          </a>
        </div>

        {/* Bottom contact bar */}
        <div className="heroFooter">
          <div className="heroFooterInner">
            <div className="contactItem">
              <span className="contactLabel">Phone</span>
              <a className="contactValue" href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>
                {phone}
              </a>
            </div>

            <div className="contactDivider" />

            <div className="contactItem">
              <span className="contactLabel">Email</span>
              <a className="contactValue" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PAGE */}
      <PageSection id="about" title="About Me">
        <div className="aboutContent">
          <p className="text">
            I'm a passionate mechatronics engineer and software developer with a keen interest in building innovative solutions that combine hardware and software. I love tackling challenging problems and bringing ideas to life through code and design.
          </p>
          <p className="text">
            With experience in C, Python, and React, I've worked on diverse projects ranging from mechanical prototypes to complex software systems. I'm always eager to learn new technologies and collaborate with others to create something meaningful.
          </p>
          <p className="text">
            When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that push my boundaries.
          </p>
        </div>
      </PageSection>

      {/* PROJECTS PAGE */}
      <PageSection id="projects" title="Projects">
        <div className="grid">
          {projects.map((p) => (
            <a className="project" key={p.title} href={p.link} target="_blank" rel="noreferrer">
              <div className="projectTop">
                <h3>{p.title}</h3>
                <span className="arrow">↗</span>
              </div>
              <p className="text">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </a>
          ))}
        </div>
      </PageSection>

      {/* RESUME PAGE */}
      <PageSection id="resume" title="Resume">
        <div className="resumeContent">
          <div className="resumeSection">
            <h3 className="resumeTitle">Education</h3>
            <p className="text">
              <strong>Mechatronics Engineering</strong><br />
              Toronto Metropolitan University (TMU) • 2026
            </p>
          </div>
          <div className="resumeSection">
            <h3 className="resumeTitle">Experience</h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="resumeSection">
            <h3 className="resumeTitle">Certifications</h3>
            <p className="text">
              Placeholder certification details. Update with your actual certifications.
            </p>
          </div>
        </div>
      </PageSection>

      {/* SKILLS PAGE */}
      <PageSection id="skills" title="Skills">
        <div className="tags">
          {skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </PageSection>

      {/* CONTACT PAGE */}
      <PageSection id="contact" title="Contact">
        <p className="text">
          Email: <a href={`mailto:${email}`}>{email}</a>
          <span className="contactSeparator">•</span>
          Phone: <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>{phone}</a>
        </p>
      </PageSection>

      <footer className="foot">© {new Date().getFullYear()} Christian Dorogan</footer>
    </div>
  );
}