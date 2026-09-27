import { useEffect, useMemo, useState } from "react";
import Navbar from "./navbar";
import portfolioData from "./profileData";
import { PRIMARY_TEXT_GRADIENT } from "./utils/Constants";
import ProjectCard from "./components/ProjectCard";
import HeroCard from "./components/HeroCard";
import JourneyCard from "./components/JourneyCard";
import ContactCard from "./components/ContactCard";
import CertificateCard from "./components/CertificateCard";
import SkillCard from "./components/SkillCard";
import CoreSkillCard from "./components/CoreSkillCard";
import FadeSection from "./components/FadeSection";
import { useTheme } from "./context/ThemeContext";
import { getRoleProfile } from "./roleConfig";

const matchesFocus = (name, focus) => {
  if (!focus.length) return true;
  const value = name.toLowerCase();
  return focus.some((item) => value === item.toLowerCase());
};

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const requestedRole = params.get("role") || params.get("skill") || "default";
  const profile = getRoleProfile(requestedRole);
  const { theme } = useTheme();

  const [activeSection, setActiveSection] = useState("home");
  const [activeCertTab, setActiveCertTab] = useState("award");
  const [pdfPreview, setPdfPreview] = useState(null);

  const focus = profile.focus;

  const focusedCoreSkills = useMemo(() => {
    if (!focus.length) return portfolioData.coreSkills;

    return portfolioData.coreSkills
      .filter((skill) => matchesFocus(skill.name, focus))
      .sort((a, b) => {
        const aIndex = profile.primarySkills.findIndex((item) => item.toLowerCase() === a.name.toLowerCase());
        const bIndex = profile.primarySkills.findIndex((item) => item.toLowerCase() === b.name.toLowerCase());
        return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
      });
  }, [focus, profile.primarySkills]);

  const focusedProjects = useMemo(() => {
    if (!focus.length) return portfolioData.projects;

    return portfolioData.projects
      .map((project) => ({
        ...project,
        highlighted: project.techStack?.some((tech) => matchesFocus(tech, focus)),
      }))
      .filter((project) => project.highlighted)
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [focus]);

  useEffect(() => {
    document.title = `${portfolioData.name} | ${profile.title}`;
  }, [profile.title]);

  useEffect(() => {
    document.body.style.overflow = pdfPreview ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [pdfPreview]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute("id") || current;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        current = "contact";
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const escHandler = (event) => {
      if (event.key === "Escape") setPdfPreview(null);
    };

    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <div className="relative isolate min-h-screen scroll-smooth bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className={`pointer-events-none fixed inset-0 -z-10 animated-aurora transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,221,255,0.05),transparent_30%),linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[length:100%_100%,48px_48px,48px_48px] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] dark:bg-[length:100%_100%,48px_48px]" />

      <Navbar activeSection={activeSection} PRIMARY_TEXT_GRADIENT={PRIMARY_TEXT_GRADIENT} />

      <FadeSection id="home">
        <HeroCard profile={profile} />
      </FadeSection>

      <FadeSection id="core-skills">
        <div className="mb-6 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-theme-text-muted">Role Focus</p>
          <h2 className={`text-3xl font-bold ${PRIMARY_TEXT_GRADIENT}`}>Core Strengths</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {focusedCoreSkills.map((skill) => (
            <CoreSkillCard
              key={skill.name}
              highlighted={focus.length > 0 && profile.primarySkills.some((item) => item.toLowerCase() === skill.name.toLowerCase())}
              {...skill}
            />
          ))}
        </div>
      </FadeSection>

      <FadeSection id="skills">
        <h2 className={`mb-6 text-center text-3xl font-bold ${PRIMARY_TEXT_GRADIENT}`}>Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((group) => (
            <SkillCard key={group.title} title={group.title} skills={group.items} focus={focus} />
          ))}
        </div>
      </FadeSection>

      <FadeSection id="certifications">
        <h2 className={`mb-6 text-center text-3xl font-bold ${PRIMARY_TEXT_GRADIENT}`}>Awards & Certifications</h2>
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-4">
          {[
            { key: "award", label: "Awards 🏆" },
            { key: "certification", label: "Certifications 🎓" },
            { key: "training", label: "Training 🛠️" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCertTab(tab.key)}
              className={`m-1 w-[200px] rounded-full border px-6 py-2 font-medium transition-all duration-300 md:m-0 md:w-auto ${
                activeCertTab === tab.key
                  ? "border-transparent bg-gradient-to-r from-[#ff00d4] to-[#00ddff] text-white shadow-lg scale-105"
                  : "border-theme-border bg-theme-bg text-theme-text hover:border-[#00ddff]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.certifications
            ?.filter((certificate) => certificate.type === activeCertTab)
            .map((item, idx) => (
              <CertificateCard key={`${item.title}-${idx}`} openPdf={setPdfPreview} {...item} />
            ))}
        </div>
      </FadeSection>

      <FadeSection id="projects">
        <div className="mb-6 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-theme-text-muted">
            {focus.length ? `${profile.label} Focus` : "Selected Work"}
          </p>
          <h2 className={`text-3xl font-bold ${PRIMARY_TEXT_GRADIENT}`}>Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </FadeSection>

      <FadeSection id="journey">
        <h2 className={`mb-6 text-center text-3xl font-bold ${PRIMARY_TEXT_GRADIENT}`}>My Journey</h2>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-1/2 top-0 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ff00d4] to-[#00ddff]" />
          <div className="flex flex-col gap-12">
            {portfolioData.journey.map((item, idx) => (
              <JourneyCard
                key={`${item.title}-${idx}`}
                isLeft={idx % 2 === 0}
                isEducation={item.type === "education"}
                {...item}
              />
            ))}
          </div>
        </div>
      </FadeSection>

      <FadeSection id="contact">
        <h2 className={`mb-4 text-center text-3xl font-bold ${PRIMARY_TEXT_GRADIENT}`}>Get in Touch</h2>
        <ContactCard {...portfolioData.contact} />
      </FadeSection>

      <footer className="border-t border-theme-border py-4 text-center text-gray-600 transition-colors dark:text-gray-500">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </footer>

      {pdfPreview && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center overscroll-contain px-4 backdrop-blur-sm ${theme === "dark" ? "bg-black/70" : "bg-white/70"}`}
          onClick={() => setPdfPreview(null)}
        >
          <div
            className={`relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setPdfPreview(null)}
              className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 transition-transform hover:scale-110 ${theme === "dark" ? "bg-black/60 text-white hover:bg-black" : "bg-white/60 text-gray-900 hover:bg-white"}`}
              aria-label="Close preview"
            >
              ✕
            </button>
            <iframe src={pdfPreview} className="h-full w-full rounded-2xl" allow="autoplay" title="Certificate Preview" />
          </div>
        </div>
      )}
    </div>
  );
}
