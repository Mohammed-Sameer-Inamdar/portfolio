import { useState, useEffect } from "react";
import Navbar from "./navbar";
import portfolioData from "./profileData"
import { PRIMARY_TEXT_GRADIENT } from "./utils/Constants";
import ProjectCard from "./components/ProjectCard";
import HeroCard from "./components/HeroCard";
import JourneyCard from "./components/JourneyCard";
import ContactCard from "./components/ContactCard";
import CertificateCard from "./components/CertificateCard";
import PortfolioData from "./profileData";
import SkillCard from "./components/SkillCard";
import FadeSection from "./components/FadeSection";

/* Typing Animation Hook */
function useTypingEffect(words, typingSpeed = 100, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index]?.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[index]?.substring(0, subIndex));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pause]);

  return text;
}

/* ===================
    Main Component
   =================== */
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const typedText = useTypingEffect(portfolioData.titles);
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white scroll-smooth">

      {/* Navbar */}
      <Navbar activeSection={activeSection} PRIMARY_TEXT_GRADIENT={PRIMARY_TEXT_GRADIENT} />

      <FadeSection id="home">
        <HeroCard typedText={typedText} />
      </FadeSection>


      {/* Skills */}
      <FadeSection id="skills">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                            ${activeCertTab === tab.key
                  ? "bg-gradient-to-r from-[#ff00d4] to-[#00ddff] text-black shadow-lg scale-105"
                  : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PortfolioData.certifications
            .filter(c => c.type === activeCertTab)
            .map((item, idx) => (
              <CertificateCard key={idx} openPdf={openPdf} {...item} />
            ))}
        </div>
      </FadeSection>

      {/* Projects */}
      <FadeSection id="projects">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </FadeSection>

      {/* Journey */}
      <FadeSection id="journey">
        <h2 className="text-3xl font-bold mb-6 text-center">My Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff00d4] to-[#00ddff]"></div>

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

      <footer className="py-4 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </footer>

      {pdfPreview && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 overscroll-contain"
          onClick={closePdf}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePdf}
              className="absolute top-4 right-4 z-10 text-white bg-black/60 hover:bg-black px-3 py-1 rounded-full"
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

