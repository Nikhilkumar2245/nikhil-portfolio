import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download,
  Code2, Database, Server, ShieldCheck, CreditCard, ExternalLink
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Nikhil Kumar",
  role: "Full Stack Developer",
  location: "Gurugram, Haryana, India",
  email: "nikhilkumar12net@gmail.com",
  phone: "+91 6207071181",
  linkedin: "https://linkedin.com/in/nikhil-kumar-533995258",
  github: "https://github.com/Nikhilkumar2245",
  resume: "/image/Nikhil Resume Latest.pdf"
};

const projects = [
  {
    number: "01",
    title: "AI Image Generator",
    category: "AI / Full Stack",
    description:
      "An AI image generation platform with an intuitive React frontend, secure authentication, credits and Razorpay payment integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    image: "/image/Ai-Image.png",
    live: "https://text-to-image-one-sigma.vercel.app",
    github: "https://github.com/Nikhilkumar2245/Text-to-image"
  },
  {
    number: "02",
    title: "Full-Fledged Banking System",
    category: "Backend / FinTech",
    description:
      "A secure banking API with authentication, account management, ledger-based transactions, money transfers and transaction consistency.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Nodemailer"],
    image: "/image/Backend-ledger.png",
    live: "https://backend-ledger-4by9.onrender.com",
    github: "https://github.com/Nikhilkumar2245/Backend-ledger"
  }
];

const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "RESTful APIs", "JWT", "Authentication"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code", "Axios", "Razorpay"]
};

const experience = [
  {
    year: "May 2025 — June 2025",
    role: "MERN Developer Intern",
    company: "CodSoft",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js and Node.js.",
      "Designed and implemented RESTful APIs for frontend-backend communication.",
      "Implemented secure authentication and authorization using JWT tokens."
    ]
  },
  {
    year: "May 2024 — June 2024",
    role: "Web Developer Intern",
    company: "Interne",
    points: [
      "Built landing pages and responsive web applications using HTML, CSS and JavaScript.",
      "Gained hands-on experience with Git, GitHub and frontend best practices."
    ]
  }
];

function App() {
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nav = ["About", "Work", "Skills", "Experience", "Contact"];

  return (
    <div className="app">
      <motion.div className="progress" style={{ scaleX }} />

      <header className="nav">
        <a className="brand" href="#top" onClick={() => setMenu(false)}>
  NIKHIL <span>KUMAR</span>
</a>

        <nav className={`navlinks ${menu ? "open" : ""}`}>
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>

        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero section" id="top">
  <div className="hero-grid" />

  <motion.div
    className="hero-copy"
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="eyebrow">
      <i />
      AVAILABLE FOR SELECT PROJECTS
    </div>

    <h1>
      I BUILD
      <br />
      <span>DIGITAL</span>
      <br />
      EXPERIENCES<span className="hero-dot">.</span>
    </h1>

    <p>
      Full Stack Developer building responsive web applications,
      secure APIs and modern digital experiences.
    </p>

    <div className="hero-actions">
      <a className="btn primary" href="#work">
        View Projects
        <ArrowUpRight size={18} />
      </a>

      <a
        className="btn ghost"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilkumar12net@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Let's Talk
        <Mail size={17} />
      </a>
    </div>

    <div className="hero-meta">
      <span>{profile.location}</span>
      <span>•</span>
      <span>Computer Science Engineering (AIML), 2026</span>
    </div>
  </motion.div>

  {/* RIGHT CIRCLE */}
  <motion.div
    className="hero-orbit"
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="orbit-glow" />

    <div className="orbit-ring ring-outer" />
    <div className="orbit-ring ring-middle" />
    <div className="orbit-ring ring-inner" />

    <div className="orbit-core">
      <span>NK</span>
      <b>.</b>
    </div>

    <span className="orbit-label label-a">REACT</span>
    <span className="orbit-label label-b">NODE</span>
    <span className="orbit-label label-c">MONGO</span>
    <span className="orbit-label label-d">AI</span>

    <span className="orbit-point point-a" />
    <span className="orbit-point point-b" />
    <span className="orbit-point point-c" />
    <span className="orbit-point point-d" />
  </motion.div>
</section>

        <section id="about" className="section about">
          <div className="section-head">
            <span className="section-no">01</span>
            <span>ABOUT ME</span>
          </div>
          <div className="about-grid">
            <h2>I turn ideas into <em>digital</em> experiences.</h2>
            <div className="about-text">
              <p>
                Computer Science Engineering graduate with hands-on experience
                in Full Stack Web Development and MERN Stack technologies.
              </p>
              <p>
                I enjoy software development, problem-solving and learning
                new technologies while building practical, responsive and
                secure applications.
              </p>
              <a className="text-link" href={profile.resume} download>
                Download Resume <Download size={17} />
              </a>
            </div>
          </div>
          <div className="stats">
            <div><strong>02+</strong><span>INTERNSHIPS</span></div>
            <div><strong>02</strong><span>FEATURED PROJECTS</span></div>
            <div><strong>10+</strong><span>TECHNOLOGIES</span></div>
            <div><strong>2026</strong><span>GRADUATION</span></div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-head">
            <span className="section-no">02</span>
            <span>SELECTED WORK</span>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <motion.article
                className="project"
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .7, delay: index * .08 }}
              >
                <div className="project-info">
                  <span className="project-no">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15}/></a>
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a>
                  </div>
                </div>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

<section id="skills" className="section skills">
  <div className="section-head">
    <span className="section-no">03</span>
    <span>SKILLS</span>
  </div>

  <div className="skills-grid">
    {Object.entries(skills).map(([category, items], index) => (
      <motion.div
        className="skill-card"
        key={category}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
      >
        <div className="skill-card-top">
          <span className="skill-number">
            0{index + 1}
          </span>

          <h3>{category}</h3>
        </div>

        <div className="skill-tags">
          {items.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>

        <section id="experience" className="section experience">
          <div className="section-head">
            <span className="section-no">04</span>
            <span>EXPERIENCE</span>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <motion.div
                className="timeline-item"
                key={item.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <ul>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section education">
          <div className="education-card">
            <span>EDUCATION</span>
            <h2>B.Tech in Computer Science Engineering (AIML)</h2>
            <p>Suresh Gyan Vihar University, Jaipur · 2026</p>
          </div>
          <div className="education-card">
            <span>ACHIEVEMENTS</span>
            <h2>India is Innovating</h2>
            <p>Led a team and coordinated project planning, development and presentation.</p>
            <h2>NPTEL — Internet of Things</h2>
            <p>Successfully completed the course.</p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <span className="section-no">05</span>
          <div className="contact-inner">
            <p className="eyebrow">HAVE AN IDEA?</p>
            <h2 className="contact-title">
      <span className="contact-word word-lets">LET'S</span>
      <span className="contact-word word-build">BUILD</span>
      <span className="contact-word word-it">IT<span className="contact-dot">.</span></span>
    </h2>
           <a
  className="contact-email"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilkumar12net@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  {profile.email} <ArrowUpRight />
</a>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              <a href={`tel:${profile.phone}`}><CreditCard /> {profile.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>NIKHIL KUMAR<span></span></strong>
        <span>FULL STACK DEVELOPER · 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
