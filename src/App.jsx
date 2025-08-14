import React from "react";

// Simple, single-file React portfolio component
// Drop this into src/App.jsx of a Vite or CRA project. Add Tailwind for styling.
// Host free on GitHub Pages or Vercel. Replace placeholder data below with yours.

const data = {
  name: "Mohammed Sameer Inamdar",
  title: "Full-Stack & Mobile Developer",
  tagline:
    "I build scalable, user‑friendly web and mobile apps with JSF and the MERN stack.",
  location: "Vijayapura, India",
  email: "mohammedsameerinamdar@gmail.com",
  phone: "+91 81474 17110",
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-link/", // ← replace
    skype: "live:your.skype.id", // ← replace
    resume: "/resume.pdf", // optional
  },
  skills: {
    frontend: ["React", "JSF", "PrimeFaces", "HTML", "CSS", "JavaScript"],
    backend: ["Node.js", "Express", "Java", "REST APIs", "GraphQL"],
    databases: ["MongoDB", "MySQL", "MS SQL"],
    tools: ["Git", "GitHub", "Linux", "Android Studio", "VS Code"],
  },
  projects: [
    {
      name: "Repfabric CRM",
      stack: ["JSF", "PrimeFaces", "Java"],
      desc:
        "Team-built CRM focused on performance and code reusability with deep API integrations (Salesforce, SugarCRM, NetSuite, QuickBooks, LMS, and more).",
      demo: "#",
      code: "#",
    },
    {
      name: "Hospitality System (Web App)",
      stack: ["React", "Node", "Express", "MySQL", "MUI"],
      desc:
        "Developed core features for bookings, guest info, and staff scheduling with a clean, responsive UI.",
      demo: "#",
      code: "#",
    },
    {
      name: "Bgoz – Food Delivery (Android)",
      stack: ["Android Studio", "Firebase", "GCP"],
      desc:
        "Built and launched an Android app with menu browsing, order placement, and real‑time delivery tracking.",
      demo: "#",
      code: "#",
    },
    {
      name: "Dynamic Forms & Responses",
      stack: ["React", "Node", "Express", "MongoDB"],
      desc:
        "Create, customize, and submit dynamic forms with real‑time response handling.",
      demo: "#",
      code: "#",
    },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "Indea Design Systems Pvt. Ltd",
      period: "Apr 2021 – Present",
      points: [
        "Collaborated on CRM features with a focus on performance and standards.",
        "Specialized in API integrations across external platforms.",
      ],
    },
    {
      role: "Junior Software Developer (Trainee)",
      company: "Rooman Technologies, Bangalore",
      period: "Feb 2020 – Apr 2020",
      points: [
        "Completed comprehensive Java training (OOP, DS, best practices).",
      ],
    },
  ],
};

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-sm">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold">{data.name}</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a className="hover:opacity-80" href="#skills">Skills</a>
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              {data.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              {data.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {data.links.resume && (
                <a
                  href={data.links.resume}
                  className="inline-flex items-center rounded-2xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:shadow"
                >
                  Download Resume
                </a>
              )}
              <a
                href={data.links.github}
                className="inline-flex items-center rounded-2xl px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
                target="_blank" rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{data.location}</span>
            </div>
          </div>
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-6 text-sm text-gray-500 dark:text-gray-400">
            Add a headshot or a simple illustration here (e.g., /profile.jpg). Keep it friendly and professional.
          </div>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Skills & Tech Stack">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-medium mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.frontend.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-medium mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.backend.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-medium mb-3">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.databases.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-medium mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.tools.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((p) => (
            <article key={p.name} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="flex gap-3 text-sm">
                  {p.demo !== "#" && (
                    <a className="underline hover:opacity-80" href={p.demo} target="_blank" rel="noreferrer">Live</a>
                  )}
                  {p.code !== "#" && (
                    <a className="underline hover:opacity-80" href={p.code} target="_blank" rel="noreferrer">Code</a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ol className="relative border-s border-gray-200 dark:border-gray-800 ms-3">
          {data.experience.map((e, idx) => (
            <li key={idx} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full -start-1.5 mt-1.5 border border-white dark:border-gray-900"></div>
              <h3 className="text-base font-semibold">{e.role} · {e.company}</h3>
              <time className="text-sm text-gray-500 dark:text-gray-400">{e.period}</time>
              <ul className="list-disc ms-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${data.email}`}>{data.email}</a></p>
              <p className="mt-2"><span className="font-medium">Phone:</span> <a className="underline" href={`tel:${data.phone}`}>{data.phone}</a></p>
            </div>
            <div>
              <p><span className="font-medium">GitHub:</span> <a className="underline" href={data.links.github} target="_blank" rel="noreferrer">{data.links.github}</a></p>
              <p className="mt-2"><span className="font-medium">LinkedIn:</span> <a className="underline" href={data.links.linkedin} target="_blank" rel="noreferrer">{data.links.linkedin}</a></p>
              <p className="mt-2"><span className="font-medium">Skype:</span> {data.links.skype}</p>
            </div>
          </div>
        </div>
      </Section>

      <footer className="text-center text-xs text-gray-500 dark:text-gray-400 pb-10">
        © {new Date().getFullYear()} {data.name}. All rights reserved.
      </footer>
    </div>
  );
}
