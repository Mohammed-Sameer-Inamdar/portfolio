import { useState, useEffect } from "react";
import Navbar from "./navbar";
import portfolioData from "./profileData"
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

/* ===================
    Main Component
   =================== */
export default function App() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [activeCertTab, setActiveCertTab] = useState("award");
  const [pdfPreview, setPdfPreview] = useState(null);

  useEffect(() => {
    if (pdfPreview) {
      // Lock background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    // Cleanup on unmount (safety)
    return () => {
      document.body.style.overflow = "";
    };
  }, [pdfPreview]);

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // a little more offset
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      // Fix for Contact
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10) {
        current = "contact";
      }

      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") closePdf();
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  const openPdf = (url) => {
    setPdfPreview(url);
  };

  const closePdf = () => setPdfPreview(null);

  return (
    <div className={`relative isolate min-h-screen scroll-smooth transition-colors duration-300 ${theme === 'dark'
        ? 'bg-[#080a12] text-white'
        : 'bg-white text-gray-900'
      }`}>
      <div className={`pointer-events-none fixed inset-0 -z-10 animated-aurora ${(theme ?? 'light') === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300 
      ${theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)]'
          : 'bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_30%),linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]'
        } bg-[length:100%_100%,48px_48px,48px_48px]`} />

      {/* Navbar */}
      <Navbar activeSection={activeSection} PRIMARY_TEXT_GRADIENT={PRIMARY_TEXT_GRADIENT} />

      <FadeSection id="home">
        <HeroCard />
      </FadeSection>

      {/* Core Skills */}
      <FadeSection id="core-skills">
        <h2 className={`text-3xl font-bold mb-6 text-center ${PRIMARY_TEXT_GRADIENT}`}>Core Strengths</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.coreSkills.map((skill, idx) => (
            <CoreSkillCard key={idx} {...skill} />
          ))}
        </div>
      </FadeSection>

      {/* Skills */}
      <FadeSection id="skills">
        <h2 className={`text-3xl font-bold mb-6 text-center ${PRIMARY_TEXT_GRADIENT}`}>Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((group, idx) => (
            <SkillCard key={idx} title={group.title} skills={group.items} />
          ))} 
        </div>
      </FadeSection>

      <FadeSection id="certifications">
        <h2 className={`text-3xl font-bold mb-8 text-center ${PRIMARY_TEXT_GRADIENT}`}>
          Certifications, Training & Awards
        </h2>
        <div className="flex justify-center md:gap-2 lg:gap-4 mb-10 flex-wrap">
          {[
            { key: "award", label: "Awards 🏆" },
            { key: "certification", label: "Certifications 🎓" },
            { key: "training", label: "Training 🛠️" }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveCertTab(tab.key)}
              className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 m-2 md:m-0 w-[200px] md:w-auto text-theme-text border-theme-border bg-theme-bg
                            ${activeCertTab === tab.key
                  ? "border-transparent bg-gradient-to-r from-[#ff00d4] to-[#00ddff] shadow-lg scale-105"
                  : "hover:border-[#00ddff]/40 hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.certifications && portfolioData.certifications
            .filter(c => c.type === activeCertTab)
            .map((item, idx) => (
              <CertificateCard key={idx} openPdf={openPdf} {...item} />
            ))}
        </div>
      </FadeSection>

      {/* Projects */}
      <FadeSection id="projects">
        <h2 className={`text-3xl font-bold mb-6 text-center ${PRIMARY_TEXT_GRADIENT}`}>Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </FadeSection>

      {/* Journey */}
      <FadeSection id="journey">
        <h2 className={`text-3xl font-bold mb-6 text-center ${PRIMARY_TEXT_GRADIENT}`}>My Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 w-1 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ff00d4] to-[#00ddff] md:left-1/2"></div>

          <div className="flex flex-col gap-12">
            {portfolioData.journey.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const isEducation = item.type === "education";
              return (
                <JourneyCard key={idx} isLeft={isLeft} isEducation={isEducation} {...item} />
              );
            })}
          </div>
        </div>
      </FadeSection>
      {/* Contact */}
      <FadeSection id="contact">
        <h2 className={`text-3xl font-bold mb-4 text-center ${PRIMARY_TEXT_GRADIENT}`}>
          Get in Touch
        </h2>
        <ContactCard {...portfolioData.contact} />
      </FadeSection>

      <footer className={`py-4 text-center border-t transition-colors ${theme === 'dark'
          ? 'text-gray-500 border-gray-800'
          : 'text-gray-600 border-gray-300'
        }`}>
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </footer>

      {pdfPreview && (
        <div
          className={`fixed inset-0 z-[100] backdrop-blur-sm flex items-center justify-center px-4 overscroll-contain ${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'
            }`}
          onClick={closePdf}
        >
          <div
            className={`relative w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePdf}
              className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full transition-transform hover:scale-110 ${theme === 'dark'
                  ? 'text-white bg-black/60 hover:bg-black'
                  : 'text-gray-900 bg-white/60 hover:bg-white'
                }`}
              aria-label="Close preview"
            >
              ✕
            </button>

            {/* PDF IFRAME */}
            <iframe
              src={pdfPreview}
              className="w-full h-full rounded-2xl"
              allow="autoplay"
              title="Certificate Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}
